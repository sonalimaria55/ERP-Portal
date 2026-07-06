const inventoryService = require("./inventoryService");
const mongoose = require("mongoose");

const Dispatch = require("../models/Dispatch");
const Branch = require("../models/Branch");

const { validateDispatchData } = require("../validations/dispatchValidation");
const generateDispatchNumber = require("../utils/generateDispatchNumber");

// Create Dispatch


const createDispatch = async (data, user) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
  console.log("===== DISPATCH DEBUG =====");
    console.log("Logged in User:", user);
    console.log("User ID:", user._id);
    console.log("User Role:", user.role);
    console.log("User Branch:", user.branch);
    console.log("Request Data:", data);



    const { toBranch, products, expectedDeliveryDate, notes } = data;

    const branch = await Branch.findById(toBranch).session(session);

    if (!branch) {
      throw new Error("Destination branch not found.");
    }

    const dispatchNumber = await generateDispatchNumber();

    // STEP 1: Reserve stock (IMPORTANT CHANGE)
    for (const item of products) {
      await inventoryService.reserveStock(
        item.product,
        user.branch || null,
        item.quantity,
        session
      );
    }

    // STEP 2: Create dispatch
    const dispatch = await Dispatch.create(
      [
        {
          dispatchNumber,
          fromBranch: user.branch || null,
          toBranch,
          products,
          expectedDeliveryDate,
          notes,
          createdBy: user._id,
          status: "Pending",
        },
      ],
      { session }
    );

    await session.commitTransaction();
    session.endSession();

    return dispatch[0];
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};
// Update Dispatch Status
const updateDispatchStatus = async (dispatchId, status) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const dispatch = await Dispatch.findById(dispatchId).session(session);

    if (!dispatch) {
      throw new Error("Dispatch not found.");
    }

if (["Delivered", "Cancelled"].includes(dispatch.status)) {
  throw new Error("This dispatch cannot be modified.");
}

    switch (status) {
      case "Approved":
        if (dispatch.status !== "Pending") {
          throw new Error("Only pending dispatch can be approved.");
        }

        dispatch.status = "Approved";
        break;

      case "Dispatched":
        if (dispatch.status !== "Approved") {
          throw new Error("Only approved dispatch can be dispatched.");
        }

        for (const item of dispatch.products) {
          await inventoryService.deductReservedStock(
            item.product,
            dispatch.fromBranch,
            item.quantity,
            session
          );
        }

        dispatch.status = "Dispatched";
        break;

      case "Delivered":
        if (dispatch.status !== "Dispatched") {
          throw new Error("Only dispatched shipment can be delivered.");
        }

        for (const item of dispatch.products) {
          await inventoryService.addStock(
            item.product,
            dispatch.toBranch,
            item.quantity,
            session
          );
        }

        dispatch.status = "Delivered";
        dispatch.deliveredDate = new Date();
        break;

      case "Cancelled":
        if (
          dispatch.status !== "Pending" &&
          dispatch.status !== "Approved"
        ) {
          throw new Error(
            "Only pending or approved dispatch can be cancelled."
          );
        }

        for (const item of dispatch.products) {
          await inventoryService.releaseReservedStock(
            item.product,
            dispatch.fromBranch,
            item.quantity,
            session
          );
        }

        dispatch.status = "Cancelled";
        break;

      default:
        throw new Error("Invalid dispatch status.");
    }

    await dispatch.save({ session });

    await session.commitTransaction();
    session.endSession();

    return dispatch;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    throw error;
  }
};

module.exports = {
  createDispatch,
  updateDispatchStatus,
};
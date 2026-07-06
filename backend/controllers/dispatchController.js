const dispatchService = require("../services/dispatchService");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");

// Create Dispatch
const createDispatch = asyncHandler(async (req, res) => {
  const dispatch = await dispatchService.createDispatch(
    req.body,
    req.user
  );

  res.status(201).json(
    new ApiResponse(true, "Dispatch created successfully", dispatch)
  );
});

// Update Dispatch Status
const updateDispatchStatus = asyncHandler(async (req, res) => {
  const allowedStatuses = [
    "Approved",
    "Dispatched",
    "Delivered",
    "Cancelled",
  ];

  if (!allowedStatuses.includes(req.body.status)) {
    return res.status(400).json(
      new ApiResponse(false, "Invalid status value")
    );
  }

  const updatedDispatch = await dispatchService.updateDispatchStatus(
    req.params.id,
    req.body.status
  );

  res.status(200).json(
    new ApiResponse(
      true,
      "Dispatch status updated successfully",
      updatedDispatch
    )
  );
});

module.exports = {
  createDispatch,
  updateDispatchStatus,
};
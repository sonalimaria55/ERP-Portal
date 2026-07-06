const Counter = require("../models/Counter");

const generateDispatchNumber = async () => {
  const counter = await Counter.findOneAndUpdate(
    { name: "dispatch" },
    { $inc: { sequence: 1 } },
    {
      new: true,
      upsert: true,
    }
  );

  return `DISP-${String(counter.sequence).padStart(6, "0")}`;
};

module.exports = generateDispatchNumber;
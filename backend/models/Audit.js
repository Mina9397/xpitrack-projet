const mongoose = require("mongoose");

const auditSchema = new mongoose.Schema({
  product: { type: String, required: true },
  systemQty: { type: Number, required: true },
  physicalQty: { type: Number, required: true },
  difference: { type: Number, required: true },
});

const Audit = mongoose.model("Audit", auditSchema);

module.exports = Audit;

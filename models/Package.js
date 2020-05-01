const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  duration: { type: Number, required: true },
  discount: { type: Number },
  price: { type: Number, required: true },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Package", packageSchema, "gs_package");

const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: Number,
    required: true
  },
  created_by: {
    type: Number
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  price: {
    type: Number
  }
});

module.exports = mongoose.model("Package", packageSchema, "gs_package");

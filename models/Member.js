const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  firstname: { type: String, required: true, max: 20 },
  lastname: { type: String, required: true, max: 20 },
  username: { type: String, required:true,unique:true },
  email: { type: String },
  password: { type: String, required: true, min: 6, max: 20 },
  password_hash: { type: String, required: true, min: 6, max: 20 },
  user_type: { type: Number, required: true },
  created_by: { type: String, required: true },
  created_date: { type: Date, required: true, default: Date.now },
  modified_date: { type: Date },
  joined_date: { type: Date, required: true, default: Date.now },
  packages : [{type: mongoose.Schema.Types.ObjectId, ref: "Package"}]
});

module.exports = mongoose.model("Member", memberSchema, "gs_member");

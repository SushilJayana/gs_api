const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  _id: { type: String,auto:true,index:true },
  firstname: {
    type: String,
    required: true,
    max: 20
  },
  lastname: {
    type: String,
    required: true,
    max: 20
  },
  username: {
    type: String,
    required: true,
    min: 6,
    max: 20
  },
  email: {
    type: String
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 20
  },
  password_hash: {
    type: String,
    required: true,
    min: 6,
    max: 20
  },
  user_type: {
    type: Number,
    required: true
  },
  created_by: {
    type: Number,
    required: true
  },
  created_date: {
    type: Date,
    required: true,
    default: Date.now
  },
  modified_date: {
    type: Date
  },
  joined_date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model("Member", memberSchema, "gs_member");

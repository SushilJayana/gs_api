const mongoose = require("mongoose");

const packageTypeSchema = new mongoose.Schema({
    _id: { type: String },
    name: {
        type: String,
        required: true
    },
    type_identity: {
        type: Number,
        required: true
    },
    created_by: {
        type: mongoose.Schema.Types.String,
        ref: "Member"
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("PackageType", packageTypeSchema, "gs_package_type");
const mongoose = require("mongoose");

const packageTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type_identity: {
        type: Number,
        required: true
    },
    created_by: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("PackageType",packageTypeSchema,"gs_package_type");
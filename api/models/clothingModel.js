// Import mongoose
const mongoose = require("mongoose");

// Declare schema and assign Schema class
const Schema = mongoose.Schema;

// Create Schema Instance and add schema properties
const ClothingSchema = new Schema({
    name: {
        type: String, // Types: String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array, Decimal128, Map, Schema
        required: true
    },
    type: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: false,
        default: null
    },
    size: {
        type: Number,
        required: false,
        default: null
    },
    datePackaged: {
        type: Date,
        required: false,
        default: null
    },
    condition: {
        type: String,
        required: false,
        default: null
    }
});

// create and export model
module.exports = mongoose.model("clothingSchema", ClothingSchema);

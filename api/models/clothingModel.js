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
        required: false
    },
    size: {
        type: Number,
        required: true
    },
    datePackaged: {
        type: Date,
        required: true,
    },
    condition: {
        type: String,
        required: false
    },
    outForDelivery: {
        type: Boolean,
        required: true,
        default: false
    }
});

// create and export model
module.exports = mongoose.model("clothingModel", ClothingSchema);

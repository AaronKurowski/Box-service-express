const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoxSchema = new Schema({
    outForDelivery: {
        type: Boolean,
        required: true,
        default: false
    },
    articlesOfClothing: []
});

module.exports = mongoose.model("boxModel", BoxSchema);

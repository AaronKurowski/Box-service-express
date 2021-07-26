const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ClothingSchema = mongoose.model('clothingSchema', ClothingSchema);

const BoxSchema = new Schema({
    recipientId: {
        type: String,
        required: false,
        default: null
    },
    outForDelivery: {
        type: Boolean,
        required: true,
        default: false
    },
    articlesOfClothing: [{type: mongoose.Schema.Types.ObjectId, ref: 'ClothingSchema'}]
});

module.exports = mongoose.model("boxModel", BoxSchema);

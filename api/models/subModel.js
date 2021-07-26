// SUBSCRIBER MODEL

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SubSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    
    
})


const password = require('../db_access/pass.js');

// export mongoose
const mongoose = require("mongoose");

// assign MongoDB connection string to URI and declare options settings
var uri = `mongodb+srv://Aaron12342:${password}@box-service-cluster.a1kzm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// Declare a variable named options and assign optional settings
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(() => {
    console.log("Database connected!");
},
err => {
    console.log("Error connecting database instance due to: " + err);
});

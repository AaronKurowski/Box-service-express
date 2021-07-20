// export mongoose
const mongoose = require("mongoose");

// assign MongoDB connection string to URI and declare options settings
var uri = `mongodb+srv://Aaron12342:RrtrSca3SDHkY8R@box-service-cluster.a1kzm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// Declare a variable named option and assign optional settings
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
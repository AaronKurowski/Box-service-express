// require express and bodyParser
const express = require("express");
const bodyParser = require("body-parser"); // parses incoming json
require("./config/db.js");

const app = express(); // create express app

// define port to run express app
const port = process.env.PORT || 3000;

// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

// add endpoint
app.get("/", (req, res) => {
    res.send("Hello Universe!");
});

// listen to server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

var routes = require("./api/routes/clothingRoutes.js");
routes(app);

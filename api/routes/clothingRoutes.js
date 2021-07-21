// create App function
module.exports = function(app) {
    var clothing = require("../controllers/clothingController.js");

    // CLOTHING ROUTES

    // get and post
    app
    .route("/clothing")
    .get(clothing.listAllClothing)
    .post(clothing.createNewClothing);


    // put and delete
    app
    .route("/clothing/:id")
    .put(clothing.updateClothing)
    .delete(clothing.deleteClothing);
};

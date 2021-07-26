module.exports = function(app) {
    var box = require("../controllers/boxController.js");

    // get all and post
    app
    .route("/box")
    .get(box.listAllBoxes)
    .post(box.createNewBox);

    // update
    app
    .route("/box/:id")
    .put(box.updateBox)
    .delete(box.deleteBox);
}

module.exports = function(app) {
    var user = require("../controllers/authController.js");


    app
    .route("/register")
    .post(user.registerUser);
};
const User = require("../models/userModel.js");


// AUTH FUNCTIONS

exports.registerUser = (req, res) => {
    let newUser = new User(req.body);
    debugger;
    newUser.save((err, user) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).json(user)
        }
    });
};

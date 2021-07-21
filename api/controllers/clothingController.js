// import clothing model
const Clothing = require("../models/clothingModel.js");


// DEFINE CONTROLLER FUNCTIONS

// list all articles of clothing
exports.listAllClothing = (req, res) => {
    Clothing.find({}, (err, clothing) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).json(clothing);
        }
    });
};

// create new clothing object
exports.createNewClothing = (req, res) => {
    let newClothing = new Clothing(req.body);
    newClothing.save((err, clothing) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).json(clothing);
        }
    });
};
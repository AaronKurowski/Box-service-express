const Box = require("../models/boxModel.js");


// DEFINE CONTROLLER FUNCTIONS

// Get all
exports.listAllBoxes = (req, res) => {
    Boxes.find({}, (err, box) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).json(box);
        }
    });
};

// post
exports.createNewBox = (req, res) => {
    let newBox = new Boxes(req.body);
    newBox.save((err, box) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).json(box);
        }
    });
};

//update
exports.updateBox = (req, res) => {
    Box.findOneAndUpdate({ _id:req.params.id}, req.body, { new:true }, (err, box) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).json(box);
        }
    });
};
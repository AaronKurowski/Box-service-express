const Box = require("../models/boxModel.js");
const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);

// DEFINE CONTROLLER FUNCTIONS

// Get all
exports.listAllBoxes = (req, res) => {
    Box.find({}, (err, box) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).json(box);
        }
    });
};

// Get by Id
exports.getBoxById = (req, res) => {
    Box.findById({ _id:req.params.id}, (err, box) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).json(box);
        }
    })
}

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

// delete box
exports.deleteBox = async (req, res) => {
    await Box.deleteOne({ _id:req.params.id}, (err) => {
        if(err){
            return res.status(404).send(err);
        }
        else{
            res.status(200).json({ message:"Box successfully deleted"});
        }
    });
};
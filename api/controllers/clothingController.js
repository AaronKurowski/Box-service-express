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

// delete clothing object
exports.deleteClothing = async (req, res) => {
    await Clothing.deleteOne({ _id:req.params.id }, (err) => {
        if(err){
            return res.status(404).send(err);
        }
        else{
            res.status(200).json({ message:"Clothing successfully deleted"});
        }
    });
};

// update clothing object by id
exports.updateClothing = (req, res) => {
    Clothing.findOneAndUpdate({ _id:req.params.id}, req.body, { new:true }, (err, clothing) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).json(clothing);
        }
    });
};

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    name:{type:String,require:true},
    price:{type:Number,require:true},
    image:{type:String,require:true},
    size:{type:String,require:true},
})

module.exports = mongoose.model("cart",cartSchema);
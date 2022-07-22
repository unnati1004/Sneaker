const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image:{type:String,require:true},
    name:{type:String,require:true},
    brand:{type:String,require:true},
    category:{type:String,require:true},
    type:{type:String,require:true},
    price:{type:Number,require:true},
    description:{type:String,require:true},
    rating:{type:Number,require:true}
})

module.exports = mongoose.model("sneaker",productSchema);
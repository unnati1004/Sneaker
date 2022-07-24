const express = require('express');
const router = express.Router();
const Prod = require("../models/product.models")

router.get("", async (req, res) => {
    try {
        const page = req.query.page || 1;
        const size = req.query.size || 15;
        const sort = {};

        if (req.query.sortBy && req.query.OrderBy) {
            sort[req.query.sortBy] = req.query.OrderBy === "desc" ? -1 : 1;
        }
        let products
        if (req.query.price) {
            products = await Prod.find({ price: { $gte: req.query.price } })
                .sort(sort)
                .skip((page - 1) * size)
                .limit(size)
                .lean()
                .exec();
                return res.status(200).send(products);
        }
        
        if(req.query.type && req.query.brand){
            console.log()
            products = await Prod.find( {type:req.query.type,brand:req.query.brand} )
                .sort(sort)
                .skip((page - 1) * size)
                .limit(size)
                .lean()
                .exec();
                return res.status(200).send(products);
        }
        if(req.query.type && req.query.category){
            products = await Prod.find( {type:req.query.type,category:req.query.category} )
                .sort(sort)
                .skip((page - 1) * size)
                .limit(size)
                .lean()
                .exec();
                return res.status(200).send(products);
        }
        else if(req.query.type){
            products = await Prod.find({ type:req.query.type })
                .sort(sort)
                .skip((page - 1) * size)
                .limit(size)
                .lean()
                .exec();
                return res.status(200).send(products);
        }
        else if(req.query.category){
            products = await Prod.find({ category:req.query.category })
                .sort(sort)
                .skip((page - 1) * size)
                .limit(size)
                .lean()
                .exec();
                return res.status(200).send(products);
        }
        else {
            products = await Prod.find().skip((page -1)*size).limit(size).sort(sort).lean().exec();
            return res.status(200).send(products);
        }

        
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

module.exports = router

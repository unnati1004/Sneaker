const express = require("express");
const router = express.Router();
const Prod = require("../models/cart.model");

router.post("", async (req, res) => {
  try {
   let products = await Prod.create(req.body);
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
router.get("", async (req, res) => {
  try {
    let products = await Prod.find().lean().exec();
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let products = await Prod.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;
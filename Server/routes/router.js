const express = require('express');
const router = new express.Router();
const products = require("../Models/productSchema")

router.get("/getProducts", async (req, res) => {
    try {
        const productsData = await products.find()
        console.log();
        res.status(200).json(productsData)
    } catch (error) {
        console.log("error" + error.message);

    }
})

module.exports = router;
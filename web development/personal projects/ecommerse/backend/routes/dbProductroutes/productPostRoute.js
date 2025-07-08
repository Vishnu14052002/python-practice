const express = require('express');
const router = express.Router();
const Product = require('../../database connection/productSchema');

router.post('/productpost', async (req, res) => {
    try {
        const products = req.body;  
    
        if (!Array.isArray(products)) {
          return res.status(400).json({ message: "Request body must be an array of products." });
        }
    
        const savedProducts = await Product.insertMany(products);
        res.status(201).json(savedProducts);
      } catch (error) {
        res.status(500).json({ message: 'Error saving products', error });
      }
})

module.exports = router;
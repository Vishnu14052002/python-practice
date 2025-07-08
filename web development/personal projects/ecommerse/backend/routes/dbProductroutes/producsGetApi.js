const express = require('express');
const router = express.Router();
const Product = require('../../database connection/productSchema');

router.get('/data', async (req, res) => {
    try {
      const data = await Product.find();  // Wait for the data from DB
      res.json(data);                      // Send data as JSON response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching products', error });
    }
  });
  

module.exports = router;
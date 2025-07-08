const express = require('express');
const router = express.Router();
const Product = require('../../database connection/productSchema');

router.get('/data/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Product.findOne({ id: id });
  
      if (!data) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching product', error });
    }
  });
  

module.exports = router;
const express = require('express');
const router = express.Router();
const data = require('./productData');
router.use(express.json());

router.get('/products', (req, res) => {
    res.status(200).json(data);
})

module.exports = router;


const express = require('express');
const router = express.Router();

router.post('/productPost', async (req, res) => {
    try {
        const data = req.body;
        const newData = new products(data);
        await newData.save();
        res.status(201).send(newUser); // Send back the saved data
    } 
    catch (error) {
        res.status(400).send({ error: error.message });
    }

})


module.exports = router;
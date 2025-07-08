const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const router = express.Router();
const saltRound = 10;
const User = require('../../database connection/userSchema');
app.use(express.json());

router.post('/register', async (req, res) => {
    try{
        const userDetails = req.body;
        const password = userDetails.password;
        const salt = await bcrypt.genSalt(saltRound);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log(password)
        const userDetailsHash = {
            "name" : userDetails.name,
            "email" : userDetails.email,
            "number" : userDetails.number,
            "address" : userDetails.address,
            "password" : hashedPassword,
            "cartList" : userDetails.cartList
        }
        const newUser = new User(userDetailsHash);
        await newUser.save();
        
        res.status(200).json({
            'message' : "registration successfull",
            "data" : userDetails
        })
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: "Error registering user", error });
    }
})

module.exports = router;


const express = require('express');
const authentication = require('../../middleware/userAuthMiddleware');
const router = express.Router();
const app = express();
app.use(express.json());
const User = require('../../database connection/userSchema');
const Product = require('../../database connection/productSchema');

router.post('/postCartItems', authentication, async (req, res) => {
    const user = req.user;
    const {id} = req.body;
    // const numericId = Number(id);
    // console.log(id);
    try{
        const data = await User.find(); 
        const productData = await Product.find();
        // console.log(productData[id-1].images)
        const actualUserEmail = data.find(p => p.email == user);
        const actualUserPhone = data.find(p => p.number == user);
        if(actualUserEmail){
            const exists = actualUserEmail.cart.some(i => i.id == id);
            console.log(exists)
            if (exists) {
                return res.status(400).json({ message: 'item already exists' });
            }
            const cartItemList = {
                "id": productData[id-1].id,
                "title": productData[id-1].title,
                "price": productData[id-1].price,
                "images": productData[id-1].images[0]
            }
            console.log(cartItemList)
            actualUserEmail.cart.push(cartItemList);
            await actualUserEmail.save();
            res.status(200).json({
                'message' : 'data saved successfully in cart'
            })
        }
        else if(actualUserPhone){
            // console.log(actualUserPhone.cart)
            const cartItemList = {
                "id": productData[id-1].id,
                "title": productData[id-1].title,
                "price": productData[id-1].price,
                "images": productData[id-1].images[0]
            }
            // console.log(cartItemList)
            // actualUserPhone.cart.push(cartItemList);
            // await actualUserPhone.save();
        }
        else{
            res.status(400).json({
                'message' : 'please login to see cart itemsss'
            })
        }
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            'message' : 'please login to see cart itemssss'
        })
    }
})

module.exports = router;
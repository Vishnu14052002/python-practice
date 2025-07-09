const express = require('express');
const authentication = require('../../middleware/userAuthMiddleware');
const router = express.Router();
const app = express();
app.use(express.json());
const User = require('../../database connection/userSchema');
const Product = require('../../database connection/productSchema');

router.post('/deleteCartItems', authentication, async (req, res) => {
    const user = req.user;
    const {id} = req.body;
    // const numericId = Number(id);
    console.log(id);
    try{
        const data = await User.find(); 
        const productData = await Product.find();
        // console.log(productData[id-1].images)
        const actualUserEmail = data.find(p => p.email == user);
        const actualUserPhone = data.find(p => p.number == user);
        if(actualUserEmail){
            const index = actualUserEmail.cart.findIndex(p => p.id == id);
            if(index !== -1) {
                actualUserEmail.cart.splice(index, 1);
                await actualUserEmail.save();
                res.status(200).json({
                    'message' : 'item deleted successfully'
                })
            }
            else{
                res.status(400).json({
                    'message' : 'item not exist in cart'
                })
            }
            
            console.log(actualUserEmail.cart)

        }
        else if(actualUserPhone){
            const index = actualUserPhone.cart.findIndex(p => p.id == id);
            if(index !== -1) {
                actualUserPhone.cart.splice(index, 1);
                await actualUserPhone.save();
            }
            else{
                res.status(400).json({
                    'message' : 'item not exist in cart'
                })
            }
            
            console.log(actualUserPhone.cart)

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
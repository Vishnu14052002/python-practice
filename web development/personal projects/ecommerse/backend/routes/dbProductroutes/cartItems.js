const authentication = require('../../middleware/userAuthMiddleware');
const express= require('express');
const router = express.Router();
const app = express();
app.use(express.json());
const User = require('../../database connection/userSchema');

router.get('/cart', authentication, async (req, res) => {
    const user = req.user;
    // console.log(user);
    try{
        const data = await User.find(); 
        const actualUserEmail = data.find(p => p.email == user);
        const actualUserPhone = data.find(p => p.number == user);
        if(actualUserEmail){
            console.log(actualUserEmail)
            res.status(200).json({
                'greetings' : `welcome ${actualUserEmail.name}`,
                'cartItems' : actualUserEmail.cart
            })
        }
        else if(actualUserPhone){
            console.log(actualUserPhone)
            res.status(200).json({
                'greetings' : `welcome ${actualUserPhone.name}`,
                'cartItems' : actualUserPhone.cart
            })
        }
        else{
            res.status(400).json({
                'message' : 'please login to see cart items'
            })
        }
    }
    catch(err){
        res.status(400).json({
            'message' : 'please login to see cart items'
        })
    }
})

module.exports = router
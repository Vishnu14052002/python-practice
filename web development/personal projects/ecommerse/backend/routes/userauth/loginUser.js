const express= require('express');
const router = express.Router();
const app = express();
app.use(express.json());
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../database connection/userSchema');

router.post('/login', async (req, res) => {
    const {emailPhone, password} = req.body;
    console.log(emailPhone, password);
    try {
        const data = await User.find(); 
        const actualUserEmail = data.find(p => p.email == emailPhone);
        const actualUserPhone = data.find(p => p.number == emailPhone);
        console.log(actualUserEmail, actualUserPhone);
        if(actualUserEmail){
            const isMatch = await bcrypt.compare(password, actualUserEmail.password)
            console.log(isMatch)
            if(isMatch){
                const token = jwt.sign(actualUserEmail.email, process.env.my_token_code);
                console.log(token)
                res.status(200).json({
                    'message' : 'login successfull',
                    'token' : token
                })
            }
        }     
        
        else if(actualUserPhone){
            const isMatch = await bcrypt.compare(password, actualUserPhone.password)
            console.log(isMatch)
            if(isMatch){
                const token = jwt.sign(actualUserPhone.email, process.env.my_token_code);
                console.log(token)
                res.status(200).json({
                    'message' : 'login successfull',
                    'token' : token
                })
            }
        }   

        else{
            res.status(400).json({
                'message' : 'username/phone number or password incorrect'
            })
        }


      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching products', error });
      }
})

module.exports = router;
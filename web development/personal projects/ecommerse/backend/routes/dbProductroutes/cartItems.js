const authentication = require('../../middleware/userAuthMiddleware');
const express= require('express');
const router = express.Router();
const app = express();
app.use(express.json());
const User = require('../../database connection/userSchema');

router.get('/cart', authentication, (req, res) => {
    const user = req.user;
    console.log(user);
})

module.exports = router
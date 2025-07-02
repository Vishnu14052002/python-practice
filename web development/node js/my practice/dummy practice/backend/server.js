const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = 3000;
app.use(express.json());

mongoose.connect('mongodb+srv://vishnug14052002:vishnu24@cluster0.guzcoui.mongodb.net/')
.then(() => {console.log('database is connected successfully')})
.catch((err) => {console.log(err)})

const userDetailsSchema = new mongoose.Schema({
    name : String,
    age : Number,
    number : Number
});

const userDetailsApi = mongoose.model('userDetailsApi', userDetailsSchema);



app.get('/api', async (req, res) => {
    const userData = await userDetailsApi.find();
    console.log('this is user details',userData)
    res.json(userData);
})



app.post('/api/post', (req, res) => {
    const {name, age, number} = req.body;

    if (
        typeof name !== 'string' ||
        typeof age !== 'number' ||
        (typeof number !== 'string' && typeof number !== 'number')
    ){
        
        console.log('invalid data:', req.body);
        return res.status(400).json({message : 'something went wrong'})
    }
    else{
        console.log('Valid data:', req.body);


        try{
            const user = new userDetailsApi({name , age, number: number.toString()})
            user.save();
            console.log('data saved successfully');
            return res.status(200).json({message : 'success'});
        }
        catch(err){
            console.log(err)
            return res.status(400).json({message : 'error'});
        }

    }




})


app.listen(PORT, ()=> {
    console.log('server is running');
})
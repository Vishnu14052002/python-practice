const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://vishnug14052002:V%40Priya%40%40%4024@cluster0.v5whhe1.mongodb.net/testDB?retryWrites=true&w=majority'
).then(() => {console.log('Database connected successfully')})
.catch((err) => {console.log('Connection error:', err)});

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
    isActive : Boolean,
    tags : [String],
    createdAt : { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

async function runQueryExamples() {
    try {
        // const newUser = await User.create({
        //     name: 'john',
        //     email: 'john@gmail.com',
        //     age: 23,
        //     isActive: false,
        //     tags: ['front end developer']
        // });

        // console.log('Created new user:', newUser);


        const getUserIsActiveFalse = await User.find({isActive : false});
        console.log(getUserIsActiveFalse)

        // const allUsers = await User.find({})
        // console.log(allUsers);
    } catch (e) {
        console.log('Error:', e);
    } finally {
        await mongoose.connection.close();
    }
}

runQueryExamples();

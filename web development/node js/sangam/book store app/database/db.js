const mongoose = require('mongoose');


const connectToDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://vishnug14052002:vishnu2424@cluster0.cbov2nq.mongodb.net/')
        console.log('mongodb connected successfully');
    }catch(e){
        console.log(e);
        process.exit(1);
    }
    finally{

    }
}


module.exports = connectToDB;
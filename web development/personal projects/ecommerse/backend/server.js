const express = require('express');
const app = express();
require('dotenv').config();





app.listen(process.env.PORT, () => {
    console.log(`server is running in PORT ${process.env.PORT}`)
});
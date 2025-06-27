const express = require('express');
const app = express();
const PORT = 3000;

// application set0

app.set('view engine', 'ejs')

//routing

app.get('/', (req, res) => {
    res.send('home page');
});

app.post('/api/data', (req, res) => {
    res.json({
        name: 'vishnu',
        data : req.body
    })
})


app.use((err, req, res, next) => {
    console.log(err.stack);
    res.send(500).send('something went wrong');
});

app.listen(PORT, () => {
    console.log('server runing')
})
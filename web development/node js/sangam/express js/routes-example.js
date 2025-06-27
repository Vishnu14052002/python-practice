const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, res)=> {
    res.send('home page')
})

app.get('/products', (req, res) => {
    const products = [
        {
            id : 1,
            label : 'product 1'
        },
        {
            id : 2,
            label : 'product 2'
        },
        {
            id : 3,
            label : 'product 3'
        },
        {
            id : 4,
            label : 'product 4'
        },
        {
            id : 5,
            label : 'product 5'
        }
    ]

    res.json(products)
});


app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);

    const products = [
        {
            id : 1,
            label : 'product 1'
        },
        {
            id : 2,
            label : 'product 2'
        },
        {
            id : 3,
            label : 'product 3'
        },
        {
            id : 4,
            label : 'product 4'
        },
        {
            id : 5,
            label : 'product 5'
        }
    ]

    const getSingleProduct = products.find(product => product.id === productId)

    if(getSingleProduct) {
        res.json(getSingleProduct)
    }
    else{
        res.status(404).send('product not found')
    }
});


app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`)
})
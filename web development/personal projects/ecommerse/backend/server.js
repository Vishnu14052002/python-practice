const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

mongoose.connect('mongodb+srv://vishnug14052002:vishnu24@cluster0.4zwtaam.mongodb.net/')
.then(()=> {console.log('database connected successfully')})
.catch((err)=> {console.log(err)});






const reviewSchema = new mongoose.Schema({
    rating: Number,
    comment: String,
    date: Date,
    reviewerName: String,
    reviewerEmail: String,
  });
  
  const dimensionsSchema = new mongoose.Schema({
    width: Number,
    height: Number,
    depth: Number,
  }, { _id: false });
  
  const metaSchema = new mongoose.Schema({
    createdAt: Date,
    updatedAt: Date,
    barcode: String,
    qrCode: String,
  }, { _id: false });
  
  const productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    category: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    tags: [String],
    brand: String,
    sku: String,
    weight: Number,
    dimensions: dimensionsSchema,
    warrantyInformation: String,
    shippingInformation: String,
    availabilityStatus: String,
    reviews: [reviewSchema],
    returnPolicy: String,
    minimumOrderQuantity: Number,
    meta: metaSchema,
    images: [String],
    thumbnail: String,
});
  
const Product = mongoose.model('Product', productSchema);


app.get('/api', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
});
  
  




app.listen(3000, () => {
    console.log('server is running');
})
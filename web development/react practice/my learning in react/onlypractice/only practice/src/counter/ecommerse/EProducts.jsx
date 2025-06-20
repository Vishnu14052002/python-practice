import React, { useEffect, useState } from 'react'
import EProductUI from './EProductUI';

const EProducts = ({ filters }) => {
    const [ProductData, setProductData] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
        .then((response) => {return response.json()})
        .then(data => setProductData(data))
    }, []);

    const finalData = ProductData.map((product, index) => (
        <EProductUI 
            key = {index}
            title = {product.title}
            image = {product.image}
            price = {product.price}
            description = {product.description}
        />
    ));

    console.log(ProductData)

    useEffect(() => {
        console.log("Filters from parent:", filters);
    }, [filters]); // <-- only logs when filters change
    

    return (
    <div>
        <h1>products</h1>
        {finalData}
        
    </div>
    )
}

export default EProducts

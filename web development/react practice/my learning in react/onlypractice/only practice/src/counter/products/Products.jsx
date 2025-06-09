import React, { useEffect, useState } from 'react'
import ProductUI from './ProductUI'

const Products = () => {
    const [entireData, setEntireData] = useState([])


    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
        .then(response => {return response.json()})
        .then(data => setEntireData(data))
    },[])
    

    if(entireData){
        console.log(entireData)
    }

    const productList = entireData.map((product,id) => (
        <ProductUI 
            key={product.id}
            image = {product.image}
            category = {product.category}
            description = {product.description}
        />
    ))

    return (
    <div>
        <h1>products</h1>
        {productList}

    </div>
    )
}

export default Products

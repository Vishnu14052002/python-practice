import React, { useEffect, useState } from 'react'
import ProductSearchUI from './ProductSearchUI'
import Cart from './Cart'

const ProductSearch = () => {

    const [productData, setProductData] = useState([])
    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
        .then((response) => {return response.json()})
        .then((data) => {setProductData(data)})
    }, [])


    // console.log(productData)

    return (
    <div>
        <h1>products</h1>
        <ProductSearchUI data = {productData}/>
        {/* <Cart /> */}
    </div>
    )
}

export default ProductSearch

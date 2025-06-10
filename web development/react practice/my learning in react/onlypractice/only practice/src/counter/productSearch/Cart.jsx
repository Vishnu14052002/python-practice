import React, { useContext } from 'react'
import {CartItems} from "./ProductSearchUI";

const Cart = (prop) => {
    const {cart} = useContext(CartItems);

    console.log("cart id",cart)
    console.log("data",prop.items);

    return (
    <div>
        <h1>cart</h1>
    </div>
    )
}

export default Cart

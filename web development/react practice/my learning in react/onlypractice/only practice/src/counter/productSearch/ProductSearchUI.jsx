import React, { useState, createContext} from 'react'
import Cart from './Cart';
import {Link} from 'react-router-dom';

export const CartItems = createContext();

export const ProductDetails = (prop) => {
    const [clicked, setClicked] = useState(false);
    

    const handleAddtoCart =  (e) => {
        // console.log("button clicked"+prop.index);
        setClicked(true);
        prop.setCart((prev) => [...prev,prop.index])
        
    }
    // console.log(prop.cart);
    
    return (
        <>
        
        <img style={{width : "200px"}} src={prop.image}></img>
        <p>{prop.index}</p>
        <h3>{prop.title}</h3>
        <h2>{prop.description}</h2>
        <Link
        to="/description"
        state={{
          image: prop.image,
          title: prop.title,
          description: prop.description,
        }}>click to see more</Link>
        <br></br><br></br>
        <button onClick={handleAddtoCart}>{clicked ? "Added" : "Add to cart"}</button>
        <br></br>
        <br></br>
        
        </>
    );
};

const ProductSearchUI = ({data}) => {
    const [searchValue, setSearchValue] = useState("")
    const [cart, setCart] = useState([]);

    const search = searchValue?.toLowerCase() || "";
    const filteredItems = data.filter((products) => products.title.toLowerCase().includes(search));
    const myProductDataCart = data;


    // console.log("my product data"+filteredItems)

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }


    if (filteredItems.length > 0) {
        // console.log(filteredItems[0].id);
      }
    // console.log(data.map((item) => {console.log(item)}));
    // console.log(searchValue)

    return (
    <div>
        <h1>product list</h1>
        <input onChange={handleChange}></input><br></br><br></br>
        {filteredItems.map((item, index) => {
            return(
                <ProductDetails index={index} key = {item.id} image = {item.image} title = {item.title} description = {item.description} cart = {cart} setCart = {setCart}/>
            )
            
        })}

        <CartItems.Provider value={{cart}}>
            <Cart items = {data}/>
        </CartItems.Provider>


    </div>
    )
}



export default ProductSearchUI

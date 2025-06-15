import React, { createContext, useState } from 'react';
import CartComp from './CartComp'
import FilterComp from './FilterComp'
import EProducts from './EProducts'



export const checkBoxPassing = createContext();







const ParentEcommerse = () => {
    const [checkBoxValues, setCheckBoxValues] = useState([]);

    const handlePriceRange = (e) => {
        setCheckBoxValues(e.target.value)
    }


    console.log(checkBoxValues)
    return (
    <div>
        <CartComp />
        <FilterComp value = {handlePriceRange}/>
        <EProducts />
    </div>
    )
}

export default ParentEcommerse

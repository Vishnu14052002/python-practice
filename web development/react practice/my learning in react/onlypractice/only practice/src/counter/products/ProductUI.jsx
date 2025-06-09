import React from 'react'

const ProductUI = (props) => {
    return (
    <div>
        <img style={{ width: '230px' }} src={props.image}></img>
        <h3>{props.category}</h3>
        <h4>{props.description}</h4>
    </div>
    )
}

export default ProductUI

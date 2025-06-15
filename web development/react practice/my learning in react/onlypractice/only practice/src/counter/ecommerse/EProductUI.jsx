import React from 'react'

const EProductUI = (props) => {
    return (
    <div>
        <img style={{width: '170px'}} src={props.image}></img>
        <h1>{props.title}</h1>
        <p>price : {props.price} £</p>
        <p>{props.description}</p>
    </div>
    )
    }

export default EProductUI

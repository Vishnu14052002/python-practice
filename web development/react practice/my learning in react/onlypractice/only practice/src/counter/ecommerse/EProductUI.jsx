import React from 'react'

const EProductUI = (props) => {
    return (
    <div>
        <img style={{width: '170px'}} src={props.image}></img>
        <h4>{props.title}</h4>
        <p>price : {props.price} £</p>
        <p>{props.description}</p>
    </div>
    )
    }

export default EProductUI

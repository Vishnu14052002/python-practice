import React from 'react'
import { useState } from 'react'



const Items = [
    {
        id : 1,
        name : "Vishnu",
        degree : "masters"
    },
    {
        id : 2,
        name : "Gowri",
        degree : "batchulers"
    },
    {
        id : 3,
        name : "lithesh",
        degree : "MBA"
    }
]
const ItemAndKeys = () => {
  return (
    
    <div>
      <h1>my items and keys component</h1>
      <ul>
      {Items.map(item => (
        //   <li key={item.id}>{item.name} - {item.degree}</li>
        <h1 key={item.id}>{item.name}</h1>
        ))}
      </ul>
    </div>
  )
}

export default ItemAndKeys

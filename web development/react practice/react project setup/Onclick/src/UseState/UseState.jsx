import React, { useState } from 'react'

const UseState = () => {
  const [content,setContent] = useState("");

  const seeContent = (value) => {
    console.log(value)
    setContent(value)
  }


   return (
    <div>
      <button onClick={() => seeContent("my content")}>Click to see</button>
      <button onClick={() => seeContent("")}>Click to hide</button>
      <p>{content}</p>
    </div>
  )
}

export default UseState

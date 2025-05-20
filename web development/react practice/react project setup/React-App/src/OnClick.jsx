import React from 'react'


const onclickme = () => console.log("hello world");


const OnClick = () => {
  return (
    <div>
      <h1>my onclick event</h1>
      <button onClick={onclickme}>click me</button>
    </div>
  )
}

export default OnClick

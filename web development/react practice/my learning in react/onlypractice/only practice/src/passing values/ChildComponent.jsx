import React, { useEffect } from 'react'


const ChildComponent = (call) => {
  const message = "hello from child componenttt"
  useEffect(() => {
    call.call(message)
  },[])
  return (
    <div>

    </div>
  )
}

export default ChildComponent

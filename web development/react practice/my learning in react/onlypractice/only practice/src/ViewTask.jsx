import React from 'react'

const valuePass = ({value}) => {
  <p>{value}</p>
}

const ViewTask = ({value}) => {
  return (
    <div>
        <h1>my tasks</h1>
        <p>{value}</p>
    </div>
  )
}

export default ViewTask
export {valuePass}

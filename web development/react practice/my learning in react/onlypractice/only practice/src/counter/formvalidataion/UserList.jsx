import React from 'react'

const UserList = (prop) => {

    console.log(prop.data)
    return (
    <div>
        <h1>user list</h1>
        <h3>{prop.data}</h3><br></br>
    </div>
    )
}

export default UserList

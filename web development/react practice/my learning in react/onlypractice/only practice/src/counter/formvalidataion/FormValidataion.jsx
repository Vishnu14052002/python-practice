import React, { useState } from 'react'
import UserList from './UserList'

const FormValidataion = () => {
    const [firstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [userData,setUserData] = useState([])

    // console.log(userData)

    const handleClick = (e) => {
        e.preventDefault()
        setUserData((prev) => [...prev, firstName, LastName])
    }
    
    return (
    <div>
        <h1>Form validataion</h1>
        <form>
            <input onChange={(e) => {setFirstName(e.target.value)}}></input>
            <input onChange={(e) => {setLastName(e.target.value)}}></input>
            <button onClick={handleClick} type='submit'>submit</button>
        </form>
        <UserList data = {userData}/>
    </div>
    )
}

export default FormValidataion

import React, { useEffect } from 'react'

const FetchApi = () => {

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            console.log(response)
            return response.json()
        }).then(data => console.log(data))
    
    },[])

    return (
        <div>
            <h1>Fetch API page</h1>
        </div>
    )
}

export default FetchApi

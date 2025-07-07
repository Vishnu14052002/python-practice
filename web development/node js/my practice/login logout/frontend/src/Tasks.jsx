import React, { useEffect, useState } from 'react'

const Tasks = () => {
    const token = localStorage.getItem('token');
    const [response, setResponse] = useState('')
    console.log(response);

    useEffect(() => {
        async function fetching() {
            const res = await fetch('http://localhost:3000/tasks', {
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json',
                },
            })
            const data = await res.json();
            setResponse(data)
        }

        fetching();
    },[])


    
    
    return (
    <div>
        <h1>my tasks</h1>
        <p>welcome {response.name}</p>
        <h5>tasks</h5>
        {response?.tasks?.length > 0 ? (
        <div>
            <p>Task: {response.tasks[0].task}</p>
            <p>Deadline: {response.tasks[0].deadline}</p>
        </div>
        ) : (
        <p>Loading or no tasks available.</p>
        )}
    </div>
    )
}

export default Tasks

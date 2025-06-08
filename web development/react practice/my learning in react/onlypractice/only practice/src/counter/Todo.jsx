import React, { useState } from 'react'

const Todo = () => {
    const [task, setTask] = useState();
    const [finalTask, setFinalTask] = useState();
    const [paragraphs, setParagraphs] = useState([]);

    const handleDelete = (indexToDelete) => {
        setParagraphs(paragraphs.filter((_, i) => i !== indexToDelete));
      };

    const handleAdd = () => {
        setParagraphs(prev => [...prev, task]);
      };
    return (
    <div>
        <h1>todo</h1>
        <h3>add task</h3>
        <input onChange={(e) => {setTask(e.target.value)}}></input><br />
        <button onClick={handleAdd}>Add</button>

        <h3>Your tasks</h3>
        {paragraphs.map((text, index) => (
        <React.Fragment key={index}>
        <p>{text}</p>
        <button onClick={() => handleDelete(index)}>Delete</button>
      </React.Fragment>
      ))}
    </div>
    )
}

export default Todo

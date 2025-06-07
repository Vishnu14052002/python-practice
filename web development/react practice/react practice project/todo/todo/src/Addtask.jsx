import React, { useState, useEffect } from 'react';

function Addtask({ onAdd }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("date").setAttribute("min", today);
  }, []);

  function handleButton(event) {
    event.preventDefault();

    const newTask = {
      name: taskName,
      description: taskDescription,
      date: date
    };

    console.log(newTask);
    onAdd(newTask); // Pass task to parent
    setTaskName('');
    setTaskDescription('');
    setDate('');
  }

  return (
    <div className="addtask-container">
      <div className="form-card">
        <h1 className="form-title">Add Task</h1>
        <form className='mytaskform' onSubmit={handleButton}>
          <label htmlFor="task">Task Name:</label>
          <input
            className='forminput'
            type="text"
            id="task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Enter task..."
          />
          <br />
          <label htmlFor="taskDescription">Task description:</label>
          <input
            className='forminput'
            type="text"
            id="taskDescription"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Enter task description..."
          />
          <br />
          <label htmlFor="date">Due Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <button type="submit" className="submit-button">Add Task</button>
        </form>
      </div>
    </div>
  );
}

export default Addtask;

import React, { useEffect } from 'react';

function Addtask() {

  

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("date").setAttribute("min", today);
  }, []);

  function handleButton(event) {
    event.preventDefault();

    const taskName = document.getElementById("task").value;
    const taskDescription = document.getElementById("taskDescription").value;
    const date = document.getElementById("date").value;

    console.log(taskName);
    console.log(taskDescription);
    console.log(date);
  }

  return (
    <div className="addtask-container">
      <div className="form-card">
        <h1 className="form-title">Add Task</h1>
        <form className='mytaskform'>
          <label htmlFor="task">Task Name:</label>
          <input className='forminput' type="text" id="task" name="task" placeholder="Enter task..." />
          <br />
          <label htmlFor="taskDescription">Task description:</label>
          <input className='forminput' type="text" id="taskDescription" name="taskDescription" placeholder="Enter task description..." />
          <br />
          <label htmlFor="date">Due Date:</label>
          <input type="date" id="date" name="date" />
          <br />
          <button onClick={handleButton} type="submit" className="submit-button">Add Task</button>
        </form>
      </div>
    </div>
  );
}

export default Addtask;

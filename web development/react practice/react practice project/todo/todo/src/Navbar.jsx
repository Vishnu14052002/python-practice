import React from 'react'

function Navbar({ addTask, myTask, finishedTask, activeTab }) {
  return (
    <div>
      <h1>TODO app</h1>
      <button
        onClick={myTask}
        className={`home-buttons ${activeTab === "myTask" ? "active" : ""}`}
      >
        My task
      </button>
      <button
        onClick={addTask}
        className={`home-buttons ${activeTab === "addTask" ? "active" : ""}`}
      >
        Add task
      </button>
      <button
        onClick={finishedTask}
        className={`home-buttons ${activeTab === "finishedTask" ? "active" : ""}`}
      >
        Finished Task
      </button>
    </div>
  )
}

export default Navbar

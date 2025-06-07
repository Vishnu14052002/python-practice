import React from 'react';

function Mytask({ task }) {
  return (
    <div>
      <h1>My Tasks</h1>
      {task ? (
        <div>
          <p><strong>Task:</strong> {task.name}</p>
          <p><strong>Description:</strong> {task.description}</p>
          <p><strong>Date:</strong> {task.date}</p>
        </div>
      ) : (
        <p>No task added yet.</p>
      )}
    </div>
  );
}

export default Mytask;

import React, { useState } from 'react';
import Addtask from './Addtask';
import Mytask from './Mytask';

function TaskManager() {
  const [task, setTask] = useState(null);

  return (
    <div>
      <Addtask onAdd={setTask} /> {/* ✅ Pass setTask as onAdd */}
      <Mytask task={task} />
    </div>
  );
}

export default TaskManager;

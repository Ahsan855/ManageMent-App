// src/components/TaskForm.js

import React, { useState } from "react";

const TaskForm = ({ onCreate }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "low",
  });

  const handleCreate = () => {
    // Generate a unique ID (you can use a library like uuid)
    const id = Math.random().toString(36).substr(2, 9);
    onCreate({ id, ...task });
    setTask({
      title: "",
      description: "",
      dueDate: "",
      priority: "low",
    });
  };

  return (
    <div>
      <h2>Create Task</h2>
      <input
        type="text"
        placeholder="Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <input
        type="date"
        placeholder="Due Date"
        value={task.dueDate}
        onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
      />
      <select
        value={task.priority}
        onChange={(e) => setTask({ ...task, priority: e.target.value })}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default TaskForm;

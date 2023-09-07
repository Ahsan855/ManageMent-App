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
    <div className="text-center bg-slate-300 w-1/2 mx-auto p-5">
      <h2 className="text-2xl font-bold text-cyan-500">Create Task</h2>
      <input
        className="border-cyan-500 border-2 p-2 m-10"
        type="text"
        placeholder="Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />{" "}
      <br />
      <textarea
        placeholder="Description"
        className="border-cyan-500 border-2 p-2"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />{" "}
      <br />
      <input
        type="date"
        className="border-cyan-500 border-2 p-2 m-10"
        placeholder="Due Date"
        value={task.dueDate}
        onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
      />
      <select
        className="border-cyan-500 border-2 p-2 m-10"
        value={task.priority}
        onChange={(e) => setTask({ ...task, priority: e.target.value })}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>{" "}
      <br />
      <button
        className="px-5 py-2 border-2 mt-5 bg-green-500 text-white text-2xl hover:bg-blue-500"
        onClick={handleCreate}
      >
        Create
      </button>
    </div>
  );
};

export default TaskForm;

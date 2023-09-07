import React, { useState } from "react";

const Task = ({ task, onUpdate, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleUpdate = () => {
    onUpdate(editedTask);
    setEditing(false);
  };

  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      {editing ? (
        <div>
          <input
            type="text"
            value={editedTask.title}
            onChange={(e) =>
              setEditedTask({ ...editedTask, title: e.target.value })
            }
          />
          <textarea
            value={editedTask.description}
            onChange={(e) =>
              setEditedTask({ ...editedTask, description: e.target.value })
            }
          />
          <input
            type="date"
            value={editedTask.dueDate}
            onChange={(e) =>
              setEditedTask({ ...editedTask, dueDate: e.target.value })
            }
          />
          <select
            value={editedTask.priority}
            onChange={(e) =>
              setEditedTask({ ...editedTask, priority: e.target.value })
            }
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Priority: {task.priority}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
          <button
            onClick={() => onUpdate({ ...task, completed: !task.completed })}
          >
            {task.completed ? "Mark In Progress" : "Mark Completed"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;

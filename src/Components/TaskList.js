import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;

import React from "react";

const TaskSort = ({ onSort }) => {
  return (
    <div>
      <label>Sort by:</label>
      <select onChange={(e) => onSort(e.target.value)}>
        <option value="priority">Priority</option>
        <option value="due-date">Due Date</option>
      </select>
    </div>
  );
};

export default TaskSort;

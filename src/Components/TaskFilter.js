import React from "react";

const TaskFilter = ({ onFilter }) => {
  return (
    <div className="text-center">
      <label>Filter by Status:</label>
      <select onChange={(e) => onFilter("status", e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="in-progress">In Progress</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
};

export default TaskFilter;

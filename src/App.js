import React, { useState } from "react";
import "./App.css";
import TaskForm from "./Components/TaskForm";
import TeamList from "./Components/TeamList";
import TaskFilter from "./Components/TaskFilter";
import TaskSort from "./Components/TaskSort";
import TaskList from "./Components/TaskList";
import TeamFrom from "./Components/TeamFrom";

function App() {
  const [tasks, setTasks] = useState([]);
  const [teams, setTeams] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("priority");

  const handleCreateTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleUpdateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const handleCreateTeam = (newTeam) => {
    setTeams([...teams, newTeam]);
  };

  const handleLeaveTeam = (teamId) => {
    const filteredTeams = teams.filter((team) => team.id !== teamId);
    setTeams(filteredTeams);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    } else if (filter === "in-progress") {
      return !task.completed;
    } else {
      return true;
    }
  });

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sort === "due-date") {
      return new Date(a.dueDate) - new Date(b.dueDate);
    } else if (sort === "priority") {
      return a.priority.localeCompare(b.priority);
    } else {
      return 0;
    }
  });

  return (
    <div className="py-5">
      <h1 className="text-center text-4xl text-purple-500 font-bold py-5">
        Task Management App
      </h1>

      <TeamFrom onCreate={handleCreateTeam} />
      <TaskForm onCreate={handleCreateTask} />
      <TeamList teams={teams} onLeave={handleLeaveTeam} />
      <TaskFilter onFilter={setFilter} />
      <TaskSort onSort={setSort} />
      <TaskList
        tasks={sortedTasks}
        onUpdate={handleUpdateTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
}

export default App;

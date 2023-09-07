import React, { useState } from "react";

const TeamForm = ({ onCreate }) => {
  const [team, setTeam] = useState({
    name: "",
    description: "",
  });

  const handleCreate = () => {
    // Generate a unique ID (you can use a library like uuid)
    const id = Math.random().toString(36).substr(2, 9);
    onCreate({ id, ...team });
    setTeam({
      name: "",
      description: "",
    });
  };

  return (
    <div>
      <h2>Create Team</h2>
      <input
        type="text"
        placeholder="Team Name"
        value={team.name}
        onChange={(e) => setTeam({ ...team, name: e.target.value })}
      />
      <textarea
        placeholder="Team Description"
        value={team.description}
        onChange={(e) => setTeam({ ...team, description: e.target.value })}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default TeamForm;

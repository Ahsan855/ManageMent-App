import React, { useState } from "react";

const TeamFrom = ({ onCreate }) => {
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
    <div className="text-center bg-slate-400 w-1/2 mx-auto p-5">
      <h2 className="text-2xl font-bold text-red-500">Create Team</h2>
      <input
        type="text"
        className="border-cyan-500 border-2 p-2 m-10"
        placeholder="Team Name"
        value={team.name}
        onChange={(e) => setTeam({ ...team, name: e.target.value })}
      />
      <br />
      <textarea
        placeholder="Team Description"
        className="border-cyan-500 border-2 p-2"
        value={team.description}
        onChange={(e) => setTeam({ ...team, description: e.target.value })}
      />
      <br />
      <button
        className="px-5 py-2 border-2  bg-green-500 text-white text-2xl hover:bg-blue-500"
        onClick={handleCreate}
      >
        Create
      </button>
    </div>
  );
};

export default TeamFrom;

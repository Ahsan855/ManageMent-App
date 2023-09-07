import React, { useState } from "react";

const Team = ({ team, onLeave }) => {
  const [leaving, setLeaving] = useState(false);

  const handleLeave = () => {
    onLeave(team.id);
    setLeaving(true);
  };

  return (
    <div className={`team ${leaving ? "leaving" : ""}`}>
      <h3 className="text-2xl text-purple-500">{team.name}</h3>
      <p className="">Description: {team.description}</p>
      <button className="text-blue-500" onClick={handleLeave}>
        Leave Team
      </button>
    </div>
  );
};

export default Team;

import React, { useState } from "react";

const Team = ({ team, onLeave }) => {
  const [leaving, setLeaving] = useState(false);

  const handleLeave = () => {
    onLeave(team.id);
    setLeaving(true);
  };

  return (
    <div className={`team ${leaving ? "leaving" : ""}`}>
      <h3>{team.name}</h3>
      <p>Description: {team.description}</p>
      <button onClick={handleLeave}>Leave Team</button>
    </div>
  );
};

export default Team;

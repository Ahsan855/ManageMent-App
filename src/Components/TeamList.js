import React from "react";
import Team from "./Team";

const TeamList = ({ teams, onLeave }) => {
  return (
    <div>
      <h2>Your Teams</h2>
      {teams.map((team) => (
        <Team key={team.id} team={team} onLeave={onLeave} />
      ))}
    </div>
  );
};

export default TeamList;

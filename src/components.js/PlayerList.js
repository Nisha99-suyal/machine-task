import React from "react";

function PlayerList({ sort }) {
  return (
    <div className="player-list">
      <ul>
        {sort.map((player, index) => (
          <li key={index}>
            {player.name} - {player.country} - Batting Average:{" "}
            {player.battingAverage}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerList;

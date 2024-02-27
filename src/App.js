import React, { useState } from "react";
import "./App.css";
import InputSection from "./components.js/InputSection";
import SortByAverage from "./components.js/SortByAverage";
import PlayerList from "./components.js/PlayerList";
import Pagination from "./components.js/Pagination";

const playersData = [
  { name: "Player A", country: "India", battingAverage: 45.2 },
  { name: "Player B", country: "Australia", battingAverage: 38.5 },
  { name: "Player C", country: "Pakistan", battingAverage: 50.1 },
  { name: "Player D", country: "England", battingAverage: 49.1 },
  { name: "Player E", country: "New Zealand", battingAverage: 32.1 },
];

const pageSize = 2;

const CricketPlayerManagementSystem = () => {
  const [players, setPlayers] = useState(playersData);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [filterName, setFilterName] = useState("");
  const [minAverage, setMinAverage] = useState("");
  const [maxAverage, setMaxAverage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const customSort = (a, b) => {
    if (sortBy === "asc") {
      return a.battingAverage - b.battingAverage;
    } else if (sortBy === "desc") {
      return b.battingAverage - a.battingAverage;
    }
    return 0;
  };

  const handleSearch = () => {
    const filtered = playersData
      .filter((player) =>
        player.name.toLowerCase().includes(filterName.toLowerCase())
      )
      .filter(
        (player) =>
          (!minAverage || player.battingAverage >= parseFloat(minAverage)) &&
          (!maxAverage || player.battingAverage <= parseFloat(maxAverage))
      );

    setFilteredPlayers(filtered);
    setCurrentPage(1);
  };

  const sortedAndPaginatedPlayers = filteredPlayers
    .sort(customSort)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const totalPages = Math.ceil(filteredPlayers.length / pageSize);

  return (
    <div className="cricket-app-container">
      <InputSection
        filterName={filterName}
        setFilterName={setFilterName}
        minAverage={minAverage}
        setMinAverage={setMinAverage}
        setMaxAverage={setMaxAverage}
        maxAverage={maxAverage}
        Click={handleSearch}
      />
      <SortByAverage sort={sortBy} setSortBy={setSortBy} />
      <PlayerList sort={sortedAndPaginatedPlayers} />
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default CricketPlayerManagementSystem;

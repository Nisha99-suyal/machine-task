import React from "react";

export default function InputSection({
  filterName,
  setFilterName,
  minAverage,
  setMinAverage,
  setMaxAverage,
  maxAverage,
  Click,
}) {
  return (
    <div className="search-section">
      <input
        type="text"
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
        placeholder="Search by Name"
      />

      <input
        type="text"
        value={minAverage}
        onChange={(e) => setMinAverage(e.target.value)}
        placeholder="Min Batting Average"
      />

      <input
        type="text"
        value={maxAverage}
        onChange={(e) => setMaxAverage(e.target.value)}
        placeholder="Max Batting Average"
      />

      <button onClick={Click}>Search</button>
    </div>
  );
}

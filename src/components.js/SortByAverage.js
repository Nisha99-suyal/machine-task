import React from "react";

function SortByAverage({ sort, setSortBy }) {
  return (
    <div className="sort-section">
      <label>
        Sort By Batting Average:
        <select value={sort} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">None</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </div>
  );
}

export default SortByAverage;

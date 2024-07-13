import React, { useState, useEffect } from 'react';

function Filter({ search, onSearchChange }) {
  const [searchText, setSearchText] = useState(search);

  useEffect(() => {
    setSearchText(search); 
  }, [search]);

  function handleInputChange(event) {
    setSearchText(event.target.value);
    onSearchChange(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleInputChange}
      />
      <select name="filter">
        <option value="All">Filter by category</option>
      </select>
    </div>
  );
}

export default Filter;

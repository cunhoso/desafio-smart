import React from 'react';

const Filter = ({ search, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search characters"
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};

export default Filter;

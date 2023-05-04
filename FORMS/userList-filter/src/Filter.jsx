import React from 'react';

const Filter = ({filterText, count, onChange})=> {
    const handleFilterChange = (e) => {
      onChange(e.target.value);
    };

    return (
      <div className="filter">
        <span className="filter__count">{count}</span>
        <input
          type="text"
          className="filter__input"
          value={filterText}
          onChange={handleFilterChange}
        />
      </div>
    );
  }
export default Filter;

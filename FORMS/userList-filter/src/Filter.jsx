import React from 'react';

const Filter = ({filterText, count, onChange})=> { // принимает свойства, которые указанны при рендере, просто подставляем в нужные места
  
    return (
      <div className="filter">
        <span className="filter__count">{count}</span>
        <input
          type="text"
          className="filter__input"
          value={filterText}
          onChange={onChange}
        />
      </div>
    );
  }
export default Filter;

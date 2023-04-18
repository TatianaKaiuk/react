import React from 'react';

// выносим компонент в отдельную функцию для отрисовки, где props - эдинный аргумент, можем вставлять спредом в текст html
const Search = (props) => {
  return (
    <div className="search">
      <h1 className="search__title">{`Hello, ${props.name}. What to search for you?`}</h1>
      <div className="search__field">
        <input type="text" className="search__input" />
        <button className="search__button">Search</button>
      </div>
    </div>
  );
};

export default Search;  
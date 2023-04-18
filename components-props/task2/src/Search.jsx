import React, { Component } from 'react'; 

// классовый компонент, отличие - аргумент поступает в this.props, обяз указ this, также унаследуем Component
class Search extends Component {
  render(){
    return (
      <div className="search">
        <h1 className="search__title">{`Hello, ${this.props.name}. What to search for you?`}</h1>
        <div className="search__field">
          <input type="text" className="search__input" />
          <button className="search__button">Search</button>
        </div>
      </div>
    );

  }
};

export default Search;  
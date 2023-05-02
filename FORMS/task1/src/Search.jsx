import React, { Component } from 'react';

class Search extends Component {
  state = { value: '' };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  search = (e) => {
    e.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };
  render() {
    return (
      <form className="search">
        <input
          type="text"
          className="search__input"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className="search__button" onClick={this.search}>
          Search
        </button>
      </form>
    );
  }
}
export default Search;

import React, { Component } from 'react';

class Filter extends Component {
  state = {
    value: '',
    count: '',
  };
handleChange= (e) => {
    this.setState({
      value: e.target.value,
    });
}
  render() {
    return (
      <div className="filter">
        <span className="filter__count">{this.state.count}</span>
        <input type="text" 
        className="filter__input" 
        value={this.state.value} 
        onChange={this.handleChange}
        />
      </div>
    );
  }
}
export default Filter;

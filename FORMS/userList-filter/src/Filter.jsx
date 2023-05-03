import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FilterText: [],
      count: '',
      value: '',
    };
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
    const res = this.users.filter(() => {
      return this.state.value;
    });
    this.setState({
      FilterText: res,
    });
    console.log(res);
  };

  render() {
    return (
      <div className="filter">
        <span className="filter__count">{this.state.count}</span>
        <input
          type="text"
          className="filter__input"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
export default Filter;

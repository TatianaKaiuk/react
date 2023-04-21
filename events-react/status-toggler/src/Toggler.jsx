import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggler: props.toggler,
    };
  }
  change() {
    
    this.setState({
      toggler: this.state.toggler = 'On',
    });
  }
  render() {
    return (
      <div className="toggler" onClick={() =>this.change()}>
        {this.state.toggler}
      </div>
    );
  }
}
export default Toggler;
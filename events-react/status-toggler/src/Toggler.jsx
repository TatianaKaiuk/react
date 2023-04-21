import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggler: { isToggleOn: true },
    };
  }

  change() {
   this.setState((prevState) => ({
     isToggleOn: !prevState.isToggleOn,
   }));
  }

 


  render() {
    return (
      <div className="toggler" onClick={() => this.change()}>
        {this.state.isToggleOn ? 'On' : 'Off'}
      </div>
    );
  }
}
export default Toggler;

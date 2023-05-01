import React, { Component } from 'react';
import Clock from './Clock.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      visible: !this.state.visible,
    });

  }
  render(){
  return (
    <>
      <button onClick={this.toggle}>Toggle</button>
      <div>
        {this.state.visible && (
          <>
            <Clock offset={0} location="London" />
            <Clock offset={2} location="Kyiv" />
            <Clock offset={-5} location="New York" />
          </>
        )}
      </div>
    </>
  );
  }
};
export default App;
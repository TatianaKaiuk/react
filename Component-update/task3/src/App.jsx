import React, { Component } from 'react';
import Expand from './Expand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  state = {
    isOpen: false,
  };

  hideContent = () => {
    this.setState({
      isOpen: false,
    });
  };

  showContent = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    if (!this.state.isOpen) {
      return (
        <button className="expand__toggle-btn" onClick={this.showContent}>
          <i className="fa-solid fa-arrow-down"></i>
        </button>
      );
    }
    return (
      <div className="app">
        <Expand
          isOpen={this.showContent}
          onClose={this.hideContent}
          title="Some title"
        >
          <p>
            Hooks are a new addition in React 16.8. They let you use state and
            other React features without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}
export default App;

import React, { Component } from 'react';

class GoodButton extends Component {
    handleClick(e) {
      // событие записываем как метод, и вставляем в render как onClick={this.handleClick}
      alert(e.target.textContent);
    }
    render(){
        return (
          <button className="fancy-button" onClick={this.handleClick}>
            Click me!
          </button>
        );
    }
}
export default GoodButton;
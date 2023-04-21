import React, { Component } from 'react';



class ColorPicker extends Component {
  onHover(e) {
   
  
   console.log(e.color)
  }

  render() {
    return (
      <div>
        <div className="picker__title">{`${this.color}`}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={this.onHover.bind()}
          ></button>
          <button className="picker__button picker__button_aqua"></button>
          <button className="picker__button picker__button_bisque"></button>
        </div>
      </div>
    );
  }
}
export default ColorPicker;

import React, { Component } from 'react';

class ColorPicker extends Component {
  // constructor(props) {
  //   super(props);
    
  //   this.state = {
  //     color: '',
  //   }
  // }

  setTitle = (color) => {
     const elemTitle = document.querySelector('.picker__title');
    // this.setState({
    //   color: color,
    // })
     elemTitle.textContent = '';
     elemTitle.textContent = color;
  };

  clearTitle() {
    const elemTitle = document.querySelector('.picker__title');
    elemTitle.textContent = '';
  }

  render() {
    return (
      <div>
        <div className="picker__title">{`${this.color}`}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.setTitle('Coral')}
            onMouseLeave={this.clearTitle}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.setTitle('Auqa')}
            onMouseLeave={this.clearTitle}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.setTitle('Bisque')}
            onMouseLeave={this.clearTitle}
          ></button>
        </div>
      </div>
    );
  }
}
export default ColorPicker;

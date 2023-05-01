import React, { Component } from 'react';
import Life from './Life';

class Demo extends Component {
  state = {
    number: Math.round(Math.random() * 100),
  };

  // кнопки для изменения состояния
  show = () => {
    this.setState({
      visible: true, // если visible true - то рендерится LIfe, и наоборот
    });
  };
  hide = () => {
    this.setState({
      visible: false,
    });
  };
  update = () => {
    this.setState({
      number: Math.round(Math.random() * 100),
    });
  };

  render() {
    return (
        <div>
            <div>
                <button onClick={this.show}>Show</button>
                <button onClick={this.hide}>Hide</button>
                <button onClick={this.update}>Update</button>
            </div>
            {this.state.visible && <Life number={this.state.number}/>} 
        </div>
    )
  }
}
//  {this.state.visible && <Life number={this.state.number}/>} - проверка на true, рендерить элемент или нет 
export default Demo;
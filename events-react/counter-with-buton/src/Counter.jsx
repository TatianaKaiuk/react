import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        counter: 0,
      };

      this.decrement = this.decrement.bind(this); // привязываем к decrement контекст, если это не сделать он будет утерян
    }
        decrement() {

            this.setState({
                counter: this.state.counter - 1,
            });
        };

        increment = () => {  // метод класса, чтобы он заработал нужно скачать плагин и сделать настройку бейбл
            // если использовать метод класса, не нужно делать привязку к контексту
              this.setState({
                counter: this.state.counter + 1,
              });
        }
        reset() {
          // 3й способ поставить обраб и не потр контекст, использ стрел функц с вызовом onClick={() => this.reset()}
          this.setState({
            counter: 0,
          });
        }

    render() {
        return (
          <div className="counter">
            <button
              data-action="decrease"
              className="counter__button"
              onClick={this.decrement}
            >
              -
            </button>
            <span className="counter__value" onClick={() => this.reset()}>
              {this.state.counter}
            </span>
            <button
              data-action="increase"
              className="counter__button"
              onClick={this.increment}
            >
              +
            </button>
          </div>
        );
    }
}
export default Counter;
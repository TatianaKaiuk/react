import React, { Component } from 'react';
import './counter.scss';

// state всегда записываем в class, не забываем о constructor(аргум), super(аргум)
class Counter extends Component {  
    constructor(props) {
        super(props);

        this.state = {  // прописываем state, чтобы показать реакту, с чем нужно работать
            counter: props.start,
        };

        // так писать не желательно
        setInterval(() => {
            this.setState({
                counter: this.state.counter + 1  // делаем интервальное изменение
            });
        }, props.interval);  // указываем какой интервал
    }
    render(){ 
        return (
        <div className="counter">{this.state.counter}</div>
        );
    }
}
export default Counter;
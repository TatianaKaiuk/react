import React, { Component } from "react";
import OddNumbers from './OddNumbers';
import EvenNumbers from './EvenNumbers';
import Numbers from "./Numbers";

class App extends Component {
    state = {
        number: 0,
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                number: this.state.number + 1
            });
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {
        return (
          <div className="app">
            <OddNumbers title="Odd numbers" number={this.state.number} />
            <EvenNumbers title="Even numbers" number={this.state.number} />
            <Numbers title="All numbers" number={this.state.number} />
            <Numbers title="Just 17" number={17} />
          </div>
        );
    }
}
export default App;
import React, { Component } from 'react';
import './clock.scss';
import moment from 'moment';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

const time = (time) => moment(time).format('h:mm:ss A');

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: getTimeWithOffset(props.offset),
    };

    setInterval(() => {
      this.setState({
        offset: getTimeWithOffset(props.offset),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{`${this.props.location}`}</div>
        <div className="clock__time">{`${time(this.state.offset)}`}</div>
      </div>
    );
  }
}
export default Clock;

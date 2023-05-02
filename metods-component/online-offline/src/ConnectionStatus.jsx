import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: true,
  };

  componentDidMount() {
    window.addEventListener('online', this.isOnline);
    window.addEventListener('offline', this.isOffline);
  }

  componentWillUnmount() {
    window.addEventListener('online', this.isOnline);
    window.addEventListener('offline', this.isOffline);
  }
  isOnline = () => {
    this.setState({
      status: true,
    });
  };

  isOffline = () => {
    this.setState({
      status: false,
    });
  };
  render() {
    if (!this.state.status) {
      return <div className="status status_offline">Offline</div>;
    }
    return <div className="status">online</div>;
  }
}
export default ConnectionStatus;

import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: ononline,
  };

  componentDidMount() {
    window.addEventListener('ononline', this.isOnline);
    window.addEventListener('onoffline', this.isOffline);
  }

  isOnline = (e) => {
    const { ononline } = e.target;
    this.setState({
      status: ononline,
    });
  };

  isOffline = (e) => {
     const { onoffline } = e.target;
      this.setState({
        status: onoffline,
      });
  };
  render() {

    if(!ononline) {
        return <div className="status status_offline">Offline</div>;
    }
  }
}
export default ConnectionStatus;

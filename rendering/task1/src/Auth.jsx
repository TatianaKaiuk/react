import React, { Component } from 'react';
import Greeting from './Greeting';
import './index.scss';
import onLogout from './Logout';
import onLogin from './Login';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  }

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? onLogin : onLogout}
      </div>
    );
  }
}
export default Auth;
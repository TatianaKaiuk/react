import React, { Component } from 'react';
import Greeting from './Greeting';
import './index.scss';
import OnLogout from './Logout';
import OnLogin from './Login';

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
        {/* {this.state.isLoggedIn ? OnLogin : OnLogout} */}
         {this.state.isLoggedIn ? (
          <button className="logout btn" onClick={this.handleLogout}>
            Logout
          </button>
        ) : (
          <button className="login btn" onClick={this.handleLogin}>
            Login
          </button>
        )} 
      </div>
    );
  }
}
export default Auth;
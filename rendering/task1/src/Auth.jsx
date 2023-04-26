import React, { Component } from 'react';
import Greeting from './Greeting';
import './index.scss';
import Logout from './Logout';
import Login from './Login';

class Auth extends Component {
  constructor(props) {
    super(props);

      this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <Logout onLogout={()=>this.handleLogoutClick()} />;
    } else {
      button = <Login onLogin={()=>this.handleLoginClick()} />;
    }
    return (
      <div className="panel">
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
export default Auth;
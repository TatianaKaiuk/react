import React, { Component } from 'react';
import Greeting from './Greeting';
import './index.scss';
import OnLogout from './Logout';
import OnLogin from './Login';

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
      button = <OnLogout onLogout={()=>this.handleLogoutClick()} />;
    } else {
      button = <OnLogin onLogin={()=>this.handleLoginClick()} />;
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
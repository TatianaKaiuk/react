import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';


class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLogin: false,
    };
  }
  handleLoginClick() {
    this.setState({ 
        onLogin: true
    });
  }
  handleLogoutClick() {
    this.setState({ onLogin: false });
  }

  spinner() {
   setInterval(() => <Spinner size={10}/>, 2000)
  }

  render() {
    const onLogin = this.state.onLogin;
    if (onLogin) {
    
      return <Logout onLogout={() => this.handleLogoutClick()} />;
    }
    if (Logout) return <Login onLogin={() => this.handleLoginClick()} />;

    return <Login onClick={()=> this.spinner()}/>
  }
}
export default Auth;

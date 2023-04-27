import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLogin: false,
      isProcessing: false,
    };
  }
  handleLoginClick() {
    this.setState(
      {
        onLogin: true,
        isProcessing: true,
      },
      () => {
        setTimeout(() => {
          this.setState({ isProcessing: false });
        }, 2000);
      }
    );
  }

  handleLogoutClick() {
    this.setState({
      onLogin: false,
      isProcessing: false,
    });
  }

  render() {
    const onLogin = this.state.onLogin;
    const isProcessing = this.state.isProcessing;

    if (isProcessing) {
      return <Spinner size={60} />;
    }

    if (onLogin) {
      return <Logout onLogout={() => this.handleLogoutClick()} />;
    }
    return <Login onLogin={() => this.handleLoginClick()} />;

    // return <Login onClick={()=>spinner()}/>
  }
}
export default Auth;

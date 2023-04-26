import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';


// setInterval(() => Logout(), 2000);

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLogin: false,
    };
  }
  change() {
    this.setState({
      onLogin:true,
    });
    Spinner()
  
  }

  render() {
    return <>
    <Login onClick={() => this.change()}/>
    {/* {this.state.onLogin ? <Logout /> : <Login />} */}
    </>;
  }
}
export default Auth;

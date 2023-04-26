import React from 'react';
import Spinner from './Spinner';

const Login = ({ onLogin }) => {
 
  return (
    <button className="login btn" onClick={onLogin}>
      Login
    </button>
  );

}
export default Login;
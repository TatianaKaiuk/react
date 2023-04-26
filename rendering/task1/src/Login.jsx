import React from 'react';

 

const OnLogin = ({onLogin}) => {
  return (
    <button className="login btn" onClick={onLogin}>
      Login
    </button>
  );
};
export default OnLogin;
import React from 'react';

const OnLogout = ({onLogout}) => {
  return (
    <button className="logout btn" onClick={onLogout}>
      Logout
    </button>
  );
};
export default OnLogout;

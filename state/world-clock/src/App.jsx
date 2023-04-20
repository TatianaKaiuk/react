import React from 'react';
import Clock from './clock.jsx';

const App = () => {
  return (
    <>
      <Clock offset="0" location="London" />
      <Clock offset="2" location="Kyiv" />
      <Clock offset="-5" location="New York" />
    </>
  );
};
export default App;
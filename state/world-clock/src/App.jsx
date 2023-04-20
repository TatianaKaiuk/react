import React from 'react';
import Clock from './Clock.jsx';

const App = () => {
  return (
    <>
      <Clock offset={0} location="London" interval={1000} />
      <Clock offset={2} location="Kyiv" interval={1000} />
      <Clock offset={-5} location="New York" interval={1000} />
    </>
  );
};
export default App;
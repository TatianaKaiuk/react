import React from 'react';

const Spinner = ({ size }) => {
  return <span className="spinner" style={ { radius: {size} } }></span>;
};
export default Spinner;

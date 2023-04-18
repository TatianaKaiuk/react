import React from 'react';
import moment from 'moment';


const Greeting = ({ firstName, lastName, birthDate }) => {
  const age = moment().diff(moment(birthDate), 'Years');

  return (
    <div className="greeting">{`My name is ${firstName} ${lastName}. I am ${age} years old`}</div>
  );
};

export default Greeting;
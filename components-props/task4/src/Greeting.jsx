import React from 'react';
import moment from 'moment';

// const formatDate = (date) => moment(date).fromNow();

const Greeting = (props) => {
return (
  <div className="greeting">
    {`My name is ${props.firstName} ${props.lastName}.
   I am ${props.birthDate} old`}
  </div>
);
}

export default Greeting;
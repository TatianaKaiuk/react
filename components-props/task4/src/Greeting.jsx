import React from 'react';
import moment from 'moment';

const formatDate = (date) => moment().startOf(date).fromNow();;

const Greeting = (props) => {
return (
  <div className="greeting">
    {`My name is ${props.firstName} ${props.lastName}.
   I am ${formatDate(props.birthDate)} years old`}
  </div>
);
}

export default Greeting;
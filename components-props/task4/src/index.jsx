import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import './index.scss';
import moment from 'moment';

const elemRoot = document.querySelector('#root');



 const birthDate = new Date('2018-04-12');
const age = moment().diff(birthDate, 'Years');

 

ReactDOM.render(
  <Greeting
    firstName="John"
    lastName="Doe"
    birthDate={age}
  />,
  elemRoot
);

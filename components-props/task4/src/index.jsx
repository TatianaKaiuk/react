import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import './index.scss';


const elemRoot = document.querySelector('#root');



//  const birthDate = new Date('2018-04-12');
// const age = moment().diff(birthDate, 'Years');

 

ReactDOM.render(
  <Greeting
    firstName="John"
    lastName="Doe"
    birthDate={new Date('2006-04-12')}
  />,
  elemRoot
);

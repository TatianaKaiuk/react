import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import './index.scss';
import moment from 'moment';

const elemRoot = document.querySelector('#root');


const now=  moment(new Date());
const birth = moment('2018-04-12');
const date = now.from(birth);
// console.log(date);


ReactDOM.render(
  <Greeting firstName="Tom" 
  lastName="Dou" 
  birthDate={date} />,
  elemRoot
);

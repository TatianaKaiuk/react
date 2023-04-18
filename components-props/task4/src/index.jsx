import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import './index.scss';

const elemRoot = document.querySelector('#root');

// const userInfo = {
//   firstName: 'Tom',
//   lastName: 'Dou',
//   birthDate: new Date('"20111031", "YYYYMMDD"'),
// };
ReactDOM.render(
  <Greeting
    firstName="Tom"
    lastName="Dou"
    birthDate={new Date('20111031')}
  />,
  elemRoot
);

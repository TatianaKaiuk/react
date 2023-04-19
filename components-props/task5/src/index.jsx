import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Profile from './Profile';

const bodyElem = document.querySelector('body');

const userData = {
  firstName: 'James',
  lastName: 'Bond',
  birthDate: '1991-01-17T11:11:11.819Z',
  birthPlace: 'London',
};

ReactDOM.render(
  <Profile
    firstName="James"
    lastName="Bond"
    birthDate={"1991-01-17T11:11:11.819Z"}
    birthPlace="London"
  />,
  bodyElem
);

import React from "react";
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const rootElem = document.querySelector('#root');

const users = [
  {
    id: 'id-0',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-1',
    age: 45,
    name: 'Anna',
  },

  {
    id: 'id-3',
    age: 45,
    name: 'Sam',
  },
];

ReactDOM.render(<UsersList users={users}/>, rootElem)

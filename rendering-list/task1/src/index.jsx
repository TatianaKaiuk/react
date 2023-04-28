import React from 'react';
import ReactDOM from 'react-dom';
import NumbersList from './NumbersList';
import './index.scss';

const rootElem = document.querySelector('#root');

// отрисовываем список с помощью реакт
const numbers = [1, 2, 3, 4, 5];

// компонента принимает в свойство numbers массив 
ReactDOM.render(<NumbersList numbers={numbers}/>, rootElem);

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter.jsx';
import './index.scss';

const bodyElem = document.querySelector('body');
ReactDOM.render(<Counter />, bodyElem);

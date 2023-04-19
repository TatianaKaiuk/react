// state - это память для react, здесь храняться данные, которые можно изменять с помощью setState()
// метод setState() изменяет только то что указываем, доп значение он не трогает, если они есть

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';

const elemRoot = document.querySelector('#root');
ReactDOM.render(<App />, elemRoot);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Search from './Search';

// импортируем все нужные файлы
const elemRoot = document.querySelector('#root');

// отрисовываем, указываем функцию для отрисовки, записываем в </> и при необходимости указываем аргумент
ReactDOM.render(< Search name ="Bob"/>, elemRoot);
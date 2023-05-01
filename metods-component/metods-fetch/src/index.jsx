import React from "react";
import  ReactDOM  from "react-dom";
import User from './User';
import './index.scss';

const rootElem = document.querySelector('#root');
ReactDOM.render(<User user={'Facebook'}/>, rootElem);
import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import './index.scss';

const elemRoot = document.querySelector('#root');

const author = {
  
  name: 'Tom',
  avatarUrl: 'htpps://avatars1.githubusercontent.com',
};
ReactDOM.render(
  <Comment user={author} text="Good job!" date={new Date()} />,
  elemRoot
);

import React from 'react';
import './comment.scss';
import moment from 'moment';
import UserInfo from './UserInfo';

const formatDate = (date) => moment(date).format('DD MMM YYYY'); // генерация даты с помощью библиотеки moment

function Comment(props) { // используем компоненты
  return (
    <div className="comment">
      <UserInfo user={props.user}/> 
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;

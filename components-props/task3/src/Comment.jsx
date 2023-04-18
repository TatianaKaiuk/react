import React from 'react';
import './comment.scss';
import moment from 'moment';
import UserInfo from './UserInfo';

const formatDate = (date) => moment(date).format('DD MMM YYYY'); // генерация даты с помощью библиотеки moment

function Comment(author) { // используем компоненты
  return (
    <div className="comment">
      <UserInfo user={author.user} />
      <div className="comment__text">{author.text}</div>
      <div className="comment__date">{formatDate(author.date)}</div>
    </div>
  );
}

export default Comment;

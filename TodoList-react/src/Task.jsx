import React from 'react';

import classNames from 'classnames';

const Task = ({ done, text, onChange, id, onDelete }) => {
  const className = classNames('list-item', { 'list-item_done': done });
  return (
    <li className={className}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className={'list-item__text'}>{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => onDelete(id)}
      ></button>
    </li>
  );
};

export default Task;

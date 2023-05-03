import React from 'react';

const User = ({name, age}) => { // компонента принимает свойства и отрисовывает
    return (
      <li className="user">
        <span className="user__name">{name}</span>
        <span className="user__age">{age}</span>
      </li>
    );
}
export default User;
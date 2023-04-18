import React from 'react';
import AvatarUrl from './Avatar';

const UserInfo = (props) => {
  return (
    <div className="user-info">
      <AvatarUrl avatarUrl={props.user.avatarUrl} name={props.user.name}/>
      <div className="user-info__name">{props.user.name}</div>
    </div>
  );
};
export default UserInfo;

import React from 'react';

const AvatarUrl = (props) => {
    return (
      <img
        className="avatar"
        src={props.avatarUrl}
        alt={props.name}
      />
    );
}
export default AvatarUrl;
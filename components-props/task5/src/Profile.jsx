import React from 'react';
import moment from 'moment';

const formDate = (date) => moment(date).format('DD MMM YY');

const Profile = (props) => {
  return (
    <>
      <div className="profile__name">{`${props.firstName} ${props.lastName}`}</div>
      <div className="profile__birth">{`Was born ${formDate(
        props.birthDate
      )} in ${props.birthPlace}`}</div>
    </>
  );
};
export default Profile;
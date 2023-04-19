import React from 'react';
import moment from 'moment';

const formDate = (date) => moment(date).format('DD MMM YY');

const Profile = ({ firstName, lastName, birthDate, birthPlace }) => {
  return (
    <>
      <div className="profile__name">{`${firstName} ${lastName}`}</div>
      <div className="profile__birth">{`Was born ${formDate(
        birthDate
      )} in ${birthPlace}`}</div>
    </>
  );
};
export default Profile;
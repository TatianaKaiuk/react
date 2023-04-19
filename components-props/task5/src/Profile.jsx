import React from 'react';
import moment from 'moment';

const formDate = (date) => moment(date).format('DD MMM YY');

const Profile = ({ ...userData }) => {
  return (
    <>
      <div className="profile__name">{`${userData.firstName} ${userData.lastName}`}</div>
      <div className="profile__birth">{`Was born ${formDate(
        userData.birthDate
      )} in ${userData.birthPlace}`}</div>
    </>
  );
};
export default Profile;
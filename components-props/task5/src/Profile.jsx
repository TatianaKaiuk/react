import React from 'react';
import moment from 'moment';

const formDate = (date) => moment(date).format('DD MMM YY');

const Profile = ({ ...userdata }) => {
  return (
    <>
      <div className="profile__name">{`${userdata.firstName} ${userdata.lastName}`}</div>
      <div className="profile__birth">{`Was born ${formDate(
        userdata.birthDate
      )} in ${userdata.birthPlace}`}</div>
    </>
  );
};
export default Profile;
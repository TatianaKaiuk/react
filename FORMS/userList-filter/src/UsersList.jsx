import User from './User';
import Filter from './Filter';
import React, { useState } from 'react';

const UsersList = ({ users }) => {
  const [filterText, setFilterText] = useState('');

  const filteredUsers = users.filter((user) => {
    if (!filterText) {
      return true; // если поле фильтрации пустое, показываем всех пользователей
    }
   return user.name.toLowerCase().includes(filterText.toLowerCase());
  });

  const handleFilterChange = (newFilter) => {
    setFilterText(newFilter);
  };

  return (
    <div>
      <Filter
        filterText={filterText}
        count={filteredUsers.length}
        onChange={handleFilterChange}
      />

      {filteredUsers.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
};

export default UsersList;

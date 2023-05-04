import User from './User';
import Filter from './Filter';
import React, { useState } from 'react';

const UsersList = ({ users }) => {
  const [filterText, setFilterText] = useState(''); // используется для изменения стейта 1й арг - что меняем, 2й - функция для изменения

  const filteredUsers = users.filter((user) => {
    if (!filterText) {
      return true; // если поле фильтрации пустое, показываем всех пользователей
    }
   return user.name.toLowerCase().includes(filterText.toLowerCase()); // если в поле ввода что то есть, возвращаем пользователя
  });

  const handleFilterChange = (e) => { // функция для получения данных с поля ввода
    setFilterText(e.target.value);
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
  // отрисовка User, если поле ввода пустое, не забываем про ключи у списка, проходимся мепом, чтобы отрисовать каждый элемент
};

export default UsersList;

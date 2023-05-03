import React, { Component } from 'react';
import User from './User';

class UsersList extends Component {
  state = { // нужен для изменения сортировки
    sorting: null,
  };

  toggleSorting = () => { // изменяем надпись на кнопке в соответствии сортировки
    const newSorting = this.state.sorting === 'asc' ? 'desc' : 'asc';
    this.setState({
      sorting: newSorting, // изменение состояния
    });
  };

  render() {
    let usersList;
    if (this.state.sorting) { // проверяем отсортирован ли список
      usersList = this.props.users // сортируем, делая копию с помощью slice. так как сорт изменяет значальные данные
        .slice()
        .sort((a, b) =>
          this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age
        );
    } else {
      usersList = this.props.users;  // к списку получаем доступ таким способом
    }

    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sorting || '-'}
        </button>

        <ul className="users">
          {usersList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}
export default UsersList;
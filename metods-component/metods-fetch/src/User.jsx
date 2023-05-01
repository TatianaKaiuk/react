import React, { Component } from 'react';

class User extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.fetchUser(this.props.userId) // используем функцию запрос на сервер, указываем this, это метод класса, получаем доступ this.props.
  }

  fetchUser = (userId) => {  // этот запрос можно вынести вообще в другой файл
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        // изменяем стейт на полученные данные
        this.setState({
          user: data,
        });
      });
  };

  render() {
    const { user } = this.state; // деструкткризация полученных данных
    if (!user) {
      // проверка если данные не получили
      return null;
    }

    const { avatar_url, location, name } = user; // вытягиваем нужное у user

    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>

          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}
export default User;

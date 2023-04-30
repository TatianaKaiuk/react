import React, { Component } from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends Component {
  state = {
    pagination: null,
  };
  togglePage = () => {
    const newPagination = this.state.pagination === 1 ? 2 : disabled;
    this.setState({
      pagination: newPagination, // изменение состояния
    });
  };
  // itemsPerPage =() => {
  //   if 
  // }
  render() {
    let usersList = this.props.users.slice();

    return (
      <div>
        <div className="pagination">
          <Pagination currentPage={1} />
        </div>
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
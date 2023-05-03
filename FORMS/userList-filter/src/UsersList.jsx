import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  render() {
    return (
      <div>
        <Filter />
        <User key={this.props.users.id} />
      </div>
    );
  }
}
export default UsersList;

import React from 'react';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';
import User from './User';

const App = () => {
  return (
    <div className="page__content">
      <h1>Users</h1>
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/users/github">Github</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users/facebook">Facebook</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/users">
            <span>Select a user please</span>
          </Route>
          <Route path="/users/:userId">
            <User />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
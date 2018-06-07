import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Greeting extends React.Component {

  render() {
    const { currentUser } = this.props;
    if (currentUser === undefined) {
      return (
        <div className="session-buttons">
          <ul>
            <li><NavLink activeClassName="active" to="/signup">Sign Up</NavLink></li>
            <li><NavLink activeClassName="active" to="/login">Log In</NavLink></li>
            <li><NavLink activeClassName="active" to="/demologin">Demo Login</NavLink></li>
          </ul>
        </div>
      );
    }

    return (
      <div className="session-logged-in">
        <p>Welcome, {currentUser.name}</p>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    );
  }
}

export default Greeting;

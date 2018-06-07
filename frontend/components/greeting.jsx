import React from 'react';
import { NavLink } from 'react-router-dom';

class Greeting extends React.Component {

  render() {
    const { currentUser } = this.props;
    if (currentUser === undefined) {
      return (
        <div className="session-buttons">
          <ul>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
            <li><NavLink to="/login">Log In</NavLink></li>
            <li><NavLink to="/demologin">Demo Login</NavLink></li>
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

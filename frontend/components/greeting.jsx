import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render() {
    const { currentUser } = this.props;
    // console.log(currentUser);
    if (currentUser === undefined) {
      return (
        <div className="session-buttons">
          <ul>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/demologin">Demo Login</Link></li>
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

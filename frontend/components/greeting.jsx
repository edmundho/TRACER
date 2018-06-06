import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render() {
    const { currentUser } = this.props;
    // console.log(currentUser);
    if (currentUser === undefined) {
      return (
        <div>
          <ul>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Log In</Link></li>
          </ul>
        </div>
      );
    }

    return (
      <div>
        <h2>Welcome, {currentUser.name}</h2>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    );
  }
}

export default Greeting;

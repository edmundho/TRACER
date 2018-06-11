import React from 'react';
import { NavLink, withRouter, Link } from 'react-router-dom';

class Greeting extends React.Component {

  render() {
    const { currentUser } = this.props;
    if (currentUser === undefined) {
      return (
        <div className="nav-bar">
          <Link to="/dashboard"><h1>TRACER</h1></Link>
          <div className="session-buttons">
            <ul>
              <li><NavLink activeClassName="active" to="/signup">Sign Up</NavLink></li>
              <li><NavLink activeClassName="active" to="/login">Log In</NavLink></li>
              <li><NavLink activeClassName="active" to="/demologin">Demo Login</NavLink></li>
            </ul>
          </div>
        </div>
      );
    }

    return (
      <div className="nav-bar">
        <div id="nav-buttons-logged-in">
          <ul>
            <Link to="/dashboard"><h1>TRACER</h1></Link>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/routes">My Routes</NavLink></li>
          </ul>
        </div>
        <div className="session-logged-in">
          <p>Welcome, {currentUser.name}</p>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      </div>
    );
  }
}

export default Greeting;

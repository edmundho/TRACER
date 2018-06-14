import React from 'react';
import { NavLink, withRouter, Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor (props) {
    super(props);

  }

  render() {
    const { currentUser } = this.props;
    if (currentUser === undefined) {
      return (
        <div id="nav-bar-container">
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
        </div>
      );
    }

    return (
      <div id="nav-bar-container">  
        <div className="nav-bar" >
          <div id="nav-buttons-logged-in">
            <ul>
              <Link to="/dashboard"><h1>TRACER</h1></Link>
              <li><NavLink id="nav-bar-buttons" to="/dashboard">Dashboard</NavLink></li>
              <li><NavLink id="nav-bar-buttons" to="/routes">My Routes</NavLink></li>
              <li><NavLink id="nav-bar-buttons" to="/activities">Activity Log</NavLink></li>
            </ul>
          </div>
          <div className="session-logged-in">
            <p>Hi, {currentUser.firstName}</p>
            <div id="user-menu-hover">
              <div id="user-menu">
                <i id="avatar" className="fas fa-user"></i>
                <i className="fas fa-caret-down"></i>
              </div>
              <div id="user-menu-dropdown" className="user-menu-dropdown">
                <ul>
                  <li><button id="logout-button" onClick={this.props.logout}>Log Out</button></li>
                </ul>
              </div>
            </div>
            <div id="new-activity-hover">
              <div id="new-activity-menu">
                <i className="fas fa-plus-circle"></i>
              </div>
              <div id="activity-menu-dropdown" className="activity-menu-dropdown">
                <ul id="activity-menu-list">
                  <Link id="create-route-link" to="/routebuilder"><li>Create New Route</li></Link>
                  <Link 
                    id="new-activity-link" 
                    to="/activities"><li><button 
                    onClick={() => this.props.showActivityForm()}>
                    Manual Activity Entry</button></li></Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Greeting;

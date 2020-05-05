import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../actions/session_actions";
import { showActivityForm } from "../../reducers/ui_reducer";
import NoUserNavbar from './NoUserNavbar';

const Navbar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(({ entities, session }) => entities.users[session.id]);
  if (currentUser === undefined) {
    return <NoUserNavbar />;
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
              {/* <i id="avatar" className="fas fa-user"></i> */}
              <div id="nav-bar-avatar-image"></div>
              <i className="fas fa-caret-down"></i>
            </div>
            <div id="user-menu-dropdown" className="user-menu-dropdown">
              <ul>
                <li>
                  <button id="logout-button" onClick={() => dispatch(logoutUser())}>
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div id="new-activity-hover">
            <div id="new-activity-menu">
              <i className="fas fa-plus-circle"></i>
            </div>
            <div id="activity-menu-dropdown" className="activity-menu-dropdown">
              <ul id="activity-menu-list">
                <Link id="create-route-link" to="/routebuilder">
                  <li>Create New Route</li>
                </Link>
                <Link id="new-activity-link" to="/activities">
                  <li>
                    <button onClick={() => dispatch(showActivityForm())}>
                      Manual Activity Entry
                    </button>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
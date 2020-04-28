import React from "react";
import { NavLink, Link } from "react-router-dom";

const NoUserNavbar = () => (
  <div id="nav-bar-container">
    <div className="nav-bar">
      <Link to="/dashboard">
        <h1>TRACER</h1>
      </Link>
      <div className="session-buttons">
        <ul>
          <li>
            <NavLink activeClassName="active" to="/signup">
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/login">
              Log In
            </NavLink>
          </li>
          <li><NavLink activeClassName="active" to="/login/demo">Demo Login</NavLink></li>
        </ul>
      </div>
    </div>
  </div>
);

export default NoUserNavbar;
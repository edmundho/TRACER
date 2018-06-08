import React from 'react';
import { Link } from 'react-router-dom';


class Dashboard extends React.Component {
 
  render () {
    return (
      <Link to="/routebuilder">
        <div className="dashboard">
          map attack!!!
        </div>        
      </Link>
    );
  }
}

export default Dashboard;
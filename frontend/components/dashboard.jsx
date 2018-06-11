import React from 'react';
import { Link } from 'react-router-dom';


class Dashboard extends React.Component {
  componentDidMount () {
    
  }
 
  render () {
    return (
      <Link to="/routebuilder">
        <div className="dashboard">
          build dat route fam
        </div>        
      </Link>
    );
  }
}

export default Dashboard;
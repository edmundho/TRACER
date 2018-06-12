import React from 'react';
import { Link } from 'react-router-dom';


class Dashboard extends React.Component {
  constructor (props) {
    super(props);

  }

  componentDidMount () {
    // this.props.getAllRoutes();
  }
 
  render () {
    return (
      <div id="dashboard">
        <Link to="/routebuilder">
          <div className="route-builder-link">
            build your route!
          </div>        
        </Link>
      </div>
    );
  }
}

export default Dashboard;
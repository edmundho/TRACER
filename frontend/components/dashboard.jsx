import React from 'react';
import { Link } from 'react-router-dom';


class Dashboard extends React.Component {
  constructor (props) {
    super(props);

  }

  componentDidMount () {
    this.props.getAllRoutes();
  }
 
  render () {
    return (
      <div id="dashboard">
        <Link to="/routebuilder">
          <div className="route-builder-link">
            build dat route fam
          </div>        
        </Link>
      </div>
    );
  }
}

export default Dashboard;
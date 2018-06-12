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
            build dat route fam
          </div>        
        </Link>
        <img src="https://media.giphy.com/media/3DnDRfZe2ubQc/giphy.gif" alt="" />
      </div>
    );
  }
}

export default Dashboard;
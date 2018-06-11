import React from 'react';
import { Link } from 'react-router-dom';

class RoutesIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.getAllRoutes();
  }
  
  render () {
    return (
      <div id="routes-index">
        <header>
          <h1>My Routes</h1>
          <Link to="/routebuilder">Create New Route</Link>
        </header>
      </div>
    );
  }
}

export default RoutesIndex;
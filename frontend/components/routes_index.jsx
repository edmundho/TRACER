import React from 'react';
import { Link } from 'react-router-dom';

class RoutesIndex extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      sport: "cycling"
    };

    this.showCyclingRoutes = this.showCyclingRoutes.bind(this);
    this.showRunningRoutes = this.showRunningRoutes.bind(this);
  }

  componentDidMount () {
    this.props.getAllRoutes();
  }

  showCyclingRoutes () {
    document.getElementById("running-routes-only").className = "";
    document.getElementById("cycling-routes-only").className = "cycling-routes-only";
    this.setState({ sport: "cycling" });
  }

  showRunningRoutes () {
    document.getElementById("cycling-routes-only").className = "";
    document.getElementById("running-routes-only").className = "running-routes-only";
    this.setState({ sport: "running" });
  }
  
  render () {
    return (
      <div id="routes-index">
        <header>
          <h1>My Routes</h1>
          <Link to="/routebuilder">Create New Route</Link>
        </header>
        <main>
          <div>
            <button 
              className="cycling-routes-only" 
              id="cycling-routes-only" 
              onClick={this.showCyclingRoutes}>Cycling</button>
            <button 
              id="running-routes-only" 
              onClick={this.showRunningRoutes}>Running</button>
          </div>
        </main>
      </div>
    );
  }
}

export default RoutesIndex;
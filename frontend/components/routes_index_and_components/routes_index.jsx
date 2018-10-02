import React from 'react';
import { Link } from 'react-router-dom';
import RoutesIndexItem from './routes_index_item';

class RoutesIndex extends React.Component {
  constructor (props) {
    super(props);

    this.state = { sport: "bike" };

    this.showCyclingRoutes = this.showCyclingRoutes.bind(this);
    this.showRunningRoutes = this.showRunningRoutes.bind(this);
  }

  componentDidMount () {
    this.props.getAllRoutes();
  }


  showCyclingRoutes () {
    document.getElementById("running-routes-only").className = "";
    document.getElementById("cycling-routes-only").className = "cycling-routes-only";
    this.setState({ sport: "bike" });
  }

  showRunningRoutes () {
    document.getElementById("cycling-routes-only").className = "";
    document.getElementById("running-routes-only").className = "running-routes-only";
    this.setState({ sport: "run" });
  }
  
  render () {
    let displayRoutes;
    const cyclingRoutes = this.props.cyclingRoutes.map(route => {
      return (<RoutesIndexItem key={route.id} route={route} />);
    });
    const runningRoutes = this.props.runningRoutes.map(route => {
      return (<RoutesIndexItem key={route.id} route={route} />);
    });
    if (this.state.sport === 'bike') {
      displayRoutes = cyclingRoutes;
    } else if (this.state.sport === 'run') {
      displayRoutes = runningRoutes;
    }
    
    return (
      <div id="routes-index">
        <header>
          <h1>My Routes</h1>
          <Link to="/routebuilder">Create New Route</Link>
        </header>
        <main>
          <div id="index-buttons-div">
            <button 
              className="cycling-routes-only" 
              id="cycling-routes-only" 
              onClick={this.showCyclingRoutes}>Cycling</button>
            <button 
              id="running-routes-only" 
              onClick={this.showRunningRoutes}>Running</button>
          </div>
          <div id="routes-index-div">
            <ul id="routes-index-items-list">
              {displayRoutes}
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default RoutesIndex;
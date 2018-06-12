import React from 'react';
import { Link } from 'react-router-dom';
import RoutesIndexItem from './routes_index_item';

class RoutesIndex extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      routes: undefined,
      cyclingRoutes: undefined,
      runningRoutes: undefined,
      sport: "bike"
    };

    this.showCyclingRoutes = this.showCyclingRoutes.bind(this);
    this.showRunningRoutes = this.showRunningRoutes.bind(this);
  }

  componentDidMount () {
    this.props.getAllRoutes().then(response => {
      let cyclingRoutes, runningRoutes;
      if (response.routes.cycling === undefined) {
        cyclingRoutes = [];
      } else { cyclingRoutes = Object.keys(response.routes.cycling); }
      if (response.routes.running === undefined) {
        runningRoutes = [];
      } else { runningRoutes = Object.keys(response.routes.running); }
      this.setState({
        routes: response.routes,
        cyclingRoutes: cyclingRoutes,
        runningRoutes: runningRoutes,
      });
    });
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
    if (this.state.routes) {
      // console.log(this.state.cyclingRoutes);
      // console.log(this.state.runningRoutes);
      const cyclingRoutes = this.state.cyclingRoutes.map(routeId => {
        let route = this.state.routes[routeId];
        return (<RoutesIndexItem key={route.id} route={route} />);
      });
      const runningRoutes = this.state.runningRoutes.map(routeId => {
        let route = this.state.routes[routeId];
        return (<RoutesIndexItem key={route.id} route={route} />);
      });
      if (this.state.sport === 'bike') {
        displayRoutes = cyclingRoutes;
      } else if (this.state.sport === 'run') {
        displayRoutes = runningRoutes;
      }
    } else {
      displayRoutes = <li>loading routes...</li>;
    }
    
    return (
      <div id="routes-index">
        <header>
          <h1>My Routes</h1>
          <Link to="/routebuilder">Create New Route</Link>
          <img src="https://media.giphy.com/media/3DnDRfZe2ubQc/giphy.gif" alt="" />
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
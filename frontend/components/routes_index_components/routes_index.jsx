import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RoutesIndexItem from './routes_index_item';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRoutes } from '../../actions/route_actions';

const RoutesIndex = () => {
  const dispatch = useDispatch();
  const [sport, setSport] = useState('bike');

  const cyclingRoutes = [];
  const runningRoutes = [];
  const routes = useSelector(state => state.entities.routes);
  Object.values(routes).forEach(route => {
    if (route.sport === 'bike') {
      cyclingRoutes.push(route);
    } else if (route.sport === 'run') {
      runningRoutes.push(route);
    }
  });

  const cyclingRouteItems = cyclingRoutes.map(route => (
    <RoutesIndexItem key={route.id} route={route} />
  ));
  const runningRouteItems = runningRoutes.map(route => (
    <RoutesIndexItem key={route.id} route={route} />
  ));

  useEffect(() => {
    dispatch(getAllRoutes());
  }, []);

  return (
    <div id="routes-index">
      <header>
        <h1>My Routes</h1>
        <Link to="/routebuilder">Create New Route</Link>
      </header>
      <main>
        <div id="index-buttons-div">
          <button
            className={sport === 'bike' ? 'cycling-routes-only' : ''}
            onClick={() => setSport('bike')}>Cycling</button>
          <button
            className={sport === 'run' ? 'running-routes-only' : ''}
            onClick={() => setSport('run')}>Running</button>
        </div>
        <div id="routes-index-div">
          <ul id="routes-index-items-list">
            {sport === 'bike' ? cyclingRouteItems : runningRouteItems}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default RoutesIndex;

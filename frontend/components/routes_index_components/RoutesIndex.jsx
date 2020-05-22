import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RoutesIndexItem from './RoutesIndexItem';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRoutes } from '../../actions/RouteActions';

const RoutesIndex = () => {
  const dispatch = useDispatch();
  const [sport, setSport] = useState('bike');
  const allRoutes = useSelector(state => state.entities.routes);
  const routes = Object.values(allRoutes)
    .filter(route => route.sport === sport)
    .map(route => <RoutesIndexItem key={route.id} route={route} />);

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
            onClick={() => setSport('bike')}>
              Cycling
          </button>
          <button
            className={sport === 'run' ? 'running-routes-only' : ''}
            onClick={() => setSport('run')}>
              Running
          </button>
        </div>
        <div id="routes-index-div">
          <ul id="routes-index-items-list">{routes}</ul>
        </div>
      </main>
    </div>
  );
};

export default RoutesIndex;

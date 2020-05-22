import React from 'react';
import { Link } from 'react-router-dom';
import formatDuration from '../../util/formatDuration';
import { destroyActivity } from '../../actions/ActivitiesActions';
import { useDispatch } from 'react-redux';

export default function ActivitiesIndexItem({ activity, route }) {
  const dispatch = useDispatch();
  const { sport, date, duration, distance, elevation, id, title } = activity;

  return (
    <tr id='activities-table'>
      <td>{sport === 'bike' ? 'Ride' : 'Run'}</td>
      <td>{date.slice(0, 10)}</td>
      <td><Link to={`/activities/${id}`}>{title}</Link></td>
      <td>{duration ? formatDuration(duration) : ' '}</td>
      <td>{distance ? distance : ' '} mi.</td>
      <td>{elevation ? elevation : ' '} ft.</td>
      <td>{route ? route.title : ' '}</td>
      <td><button onClick={() => dispatch(destroyActivity(id))}>Delete</button></td>
    </tr>
  );
}

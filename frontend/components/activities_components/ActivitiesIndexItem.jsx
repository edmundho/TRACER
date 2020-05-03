import React from 'react';
import { Link } from 'react-router-dom';
import formatDuration from '../../util/formatDuration';

export default function ActivitiesIndexItem({
  activity,
  route,
  deleteActivity
}) {
  const { sport, date, duration, distance, elevation, id, title } = activity;

  return (
    <tr id="activities-table">
      <td>{sport === 'bike' ? 'Ride' : 'Run'}</td>
      <td>{date.slice(0, 10)}</td>
      <td><Link to={`/activities/${id}`}>{title}</Link></td>
      <td>{duration ? formatDuration(duration) : " "}</td>
      <td>{distance ? distance : " "} mi.</td>
      <td>{elevation ? elevation : " "} ft.</td>
      <td>{route ? route.title : " "}</td>
      <td><button onClick={() => deleteActivity(id)}>Delete</button></td>
    </tr>
  );
}

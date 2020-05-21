import React, { useEffect } from 'react';
import ActivitiesIndexItem from './ActivitiesIndexItem';
import { Link } from 'react-router-dom';
import NewActivityForm from './NewActivityForm';

export default function ActivitiesIndex(props) {
  useEffect(() => {
    props.getAllActivities();
    props.getAllRoutes();

    return () => {
      props.hideActivityForm();
    }
  }, [])

  const closeForm = () => {
    props.hideActivityForm();
  }

  const showForm = () => {
    props.showActivityForm();
  }

  const activities = Object.values(props.activities).map(activity => {
    return (
      <ActivitiesIndexItem
        key={activity.id}
        activity={activity}
        deleteActivity={props.destroyActivity}
        route={props.routes[activity.routeId]} />
    );
  });

  return (
    <div id="activities-index">
      <header>
        <h1>My Activities</h1>
        <div id="activity-button-container" >{
          props.showForm
            ? <button id="active-new-activity-button" onClick={closeForm}>Log New Activity</button>
            : <button id="new-activity-button" onClick={showForm}>Log New Activity</button>
          }
          <div id="activity-index-buttons">
            <h2>- OR -</h2>
            <Link to="/routebuilder">Create New Route</Link>
          </div>
        </div>

      </header>
      {props.showForm && <NewActivityForm
        routes={props.routes}
        errors={props.errors}
      />}
      <h2>{activities.length} activities</h2>
      <table id="activities-list-table" cellSpacing="0" cellPadding="5">
        <tbody>
          <tr>
            <th>Sport</th>
            <th>Date</th>
            <th>Title</th>
            <th>Duration</th>
            <th>Distance</th>
            <th>Elevation Gain</th>
            <th>Route Taken</th>
            <th> </th>
          </tr>
          {activities}
        </tbody>
      </table>
    </div>
  )
}

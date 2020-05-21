import React, { useEffect } from 'react';
import ActivitiesIndexItem from './ActivitiesIndexItem';
import { Link } from 'react-router-dom';
import NewActivityForm from './NewActivityForm';
import { useDispatch, useSelector } from 'react-redux';
import { getAllActivities } from '../../actions/activities_actions';
import { getAllRoutes } from '../../actions/route_actions';
import { showActivityForm, hideActivityForm } from '../../reducers/ui_reducer';
import sort from '../../util/sortObjectArrayByProperty';

export default function ActivitiesIndex() {
  const dispatch = useDispatch();
  const routes = useSelector(state => state.entities.routes);
  const formActive = useSelector(state => state.ui.showActivityForm);
  const activitiesObject = useSelector(state => state.entities.activities);
  const activitiesSortedByDate = sort('date', Object.values(activitiesObject))

  useEffect(() => {
    dispatch(getAllActivities());
    dispatch(getAllRoutes());

    return () => {
      closeForm();
    }
  }, [])

  const closeForm = () => {
    dispatch(hideActivityForm());
  }

  const showForm = () => {
    dispatch(showActivityForm());
  }

  const activities = activitiesSortedByDate.map(activity => {
    return (
      <ActivitiesIndexItem
        key={activity.id}
        activity={activity}
        route={routes[activity.routeId]} />
    );
  });

  return (
    <div id='activities-index'>
      <header>
        <h1>My Activities</h1>
        <div id='activity-button-container' >
          <button
            id={formActive ? 'active-new-activity-button' : 'new-activity-button'}
            onClick={formActive ? closeForm : showForm}>
              Log New Activity
          </button>
          <div id='activity-index-buttons'>
            <h2>- OR -</h2>
            <Link to='/routebuilder'>Create New Route</Link>
          </div>
        </div>
      </header>
      {formActive && <NewActivityForm />}
      <h2>{`${activities.length} activities`}</h2>
      <table id='activities-list-table' cellSpacing='0' cellPadding='5'>
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

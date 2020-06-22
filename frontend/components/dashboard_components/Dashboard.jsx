import React, { useEffect } from 'react';
import FeedItem from './FeedItem'
import { StyleSheet } from 'aphrodite';
import { fadeIn } from 'react-animations';
import StatsSidebar from './StatsSidebar';
import PastWeekStats from './PastWeekStats';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRoutes } from '../../actions/RouteActions';
import { getAllActivities } from '../../actions/ActivitiesActions';
import sort from '../../util/sortObjectArrayByProperty';

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '0.5s'
  },
  fadeIn2: {
    animationName: fadeIn,
    animationDuration: '3s'
  }
});

export default function Dashboard() {
  const dispatch = useDispatch();
  const routes = useSelector(state => state.entities.routes);
  const user = useSelector(state => state.entities.users[state.session.id])
  const activitiesObject = useSelector(state => state.entities.activities);
  const activitiesSortedByDate = sort('date', Object.values(activitiesObject))

  useEffect(() => {
    dispatch(getAllActivities());
    dispatch(getAllRoutes());
  }, [])

  const activities = activitiesSortedByDate.map(activity => {
    if (activity.routeId) {
      let route = routes[activity.routeId];
      return (
        <FeedItem
          key={activity.id}
          user={user}
          activity={activity}
          route={route}
        />
      );
    } else {
      return <FeedItem key={activity.id} user={user} activity={activity} />;
    }
  });

  return (
    <div id="dashboard">
      <div id="stats-sidebar">
        <StatsSidebar user={user} activities={activitiesSortedByDate} />
        <div id="periodic-stats">
          <PastWeekStats activities={activitiesSortedByDate} />
        </div>
        <div id="creator-footer">
          Visit my&nbsp;
          <a href="https://www.linkedin.com/in/edmundho9/" target="_blank">
            LinkedIn&nbsp;<i className="fab fa-linkedin"></i>
          </a>
          &nbsp;|&nbsp;
          <a href="https://github.com/edmundho" target="_blank">
            Github&nbsp;<i className="fab fa-github"></i>
          </a>
          &nbsp;!
        </div>
      </div>
      <div id="activity-feed">
        <ul>{
          activities.length > 0
            ? activities
            : <div id="dashboard-placeholder">No activities yet!</div>
        }</ul>
      </div>
    </div>
  );
}

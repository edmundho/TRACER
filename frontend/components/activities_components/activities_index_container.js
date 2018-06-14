import { connect } from 'react-redux';
import { getAllActivities, postNewActivity, clearActivityErrors, destroyActivity } from '../../actions/activities_actions';
import { getAllRoutes } from '../../actions/route_actions';
import ActivitiesIndex from './activities_index';

// https://stackoverflow.com/questions/5073799/how-to-sort-a-javascript-array-of-objects-by-nested-object-property?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
const sort = (property, array) => {
  array.sort((a, b) => {
    if (a[property] <= b[property]) {
      return 1;
    } else if (a[property] > b[property]) {
      return -1;
    } else {
      return 0;
    }
  });
};

const mapStateToProps = (state = {}, ownProps) => {
  let activities = [];
  Object.values(state.entities.activities).forEach(activity => {
    activities.push(activity);
  });
  sort('date', activities);

  const cyclingRoutes = [];
  const runningRoutes = [];
  Object.values(state.entities.routes).forEach(route => {
    if (route.sport === 'bike') {
      cyclingRoutes.push(route);
    } else if (route.sport === 'run') {
      runningRoutes.push(route);
    }
  });

  return { 
    activities: activities,
    routes: state.entities.routes,
    cyclingRoutes: cyclingRoutes,
    runningRoutes: runningRoutes,
    errors: state.errors.activity
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllActivities: () => dispatch(getAllActivities()),
  getAllRoutes: () => dispatch(getAllRoutes()),
  postNewActivity: activity => dispatch(postNewActivity(activity)),
  clearErrors: () => dispatch(clearActivityErrors()),
  destroyActivity: activityId => dispatch(destroyActivity(activityId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesIndex);
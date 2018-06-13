import { connect } from 'react-redux';
import { getAllActivities, postNewActivity, clearActivityErrors } from '../../actions/activities_actions';
import { getAllRoutes } from '../../actions/route_actions';
import ActivitiesIndex from './activities_index';

const mapStateToProps = (state = {}, ownProps) => {
  let activities = [];
  Object.values(state.entities.activities).forEach(activity => {
    activities.push(activity);
  });
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
  clearErrors: () => dispatch(clearActivityErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesIndex);
import { connect } from 'react-redux';
import { getAllActivities, postNewActivity, clearActivityErrors, destroyActivity } from '../../actions/activities_actions';
import { getAllRoutes } from '../../actions/route_actions';
import ActivitiesIndex from './activities_index';
import { showActivityForm, hideActivityForm } from '../../reducers/ui_reducer';
import sort from '../../util/sortObjectArrayByProperty';

const mapStateToProps = (state = {}) => {
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
    errors: state.errors.activity,
    showForm: state.ui.showActivityForm,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllActivities: () => dispatch(getAllActivities()),
  getAllRoutes: () => dispatch(getAllRoutes()),
  postNewActivity: activity => dispatch(postNewActivity(activity)),
  clearErrors: () => dispatch(clearActivityErrors()),
  destroyActivity: activityId => dispatch(destroyActivity(activityId)),
  showActivityForm: () => dispatch(showActivityForm()),
  hideActivityForm: () => dispatch(hideActivityForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesIndex);
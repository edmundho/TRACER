import { connect } from 'react-redux';
import { getAllRoutes } from '../../actions/RouteActions';
import { getAllActivities } from '../../actions/activities_actions';
import Dashboard from './dashboard';
import sort from '../../util/sortObjectArrayByProperty';

const mapStateToProps = (state = {}) => {
  const activities = [];
  const routes = [];

  Object.values(state.entities.routes).forEach(routeInState => {
    routes.push(routeInState);
  });

  Object.values(state.entities.activities).forEach(activity => {
    activities.push(activity);
  });
  sort('date', activities);

  return {
    activities: activities,
    routes: state.entities.routes,
    user: state.entities.users[state.session.id]
  };

};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllRoutes: () => dispatch(getAllRoutes()),
  getAllActivities: () => dispatch(getAllActivities())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

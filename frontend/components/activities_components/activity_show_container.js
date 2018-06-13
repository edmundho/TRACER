import { connect } from 'react-redux';
import { getActivity } from '../../actions/activities_actions';
import { getRoute } from '../../actions/route_actions';
import ActivityShow from './activity_show';

const mapStateToProps = (state = {}, ownProps) => {
  const activityId = ownProps.match.params.activityId;
  const activity = state.entities.activities[activityId];

  let route = [];
  Object.values(state.entities.routes).forEach(routeInState => {
    if (routeInState.id === activity.routeId) {
      route.push(routeInState);
    }
  });

  return {
    activityId: activityId,
    activity: activity,
    route: route,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getActivity: activityId => dispatch(getActivity(activityId)),
  getRoute: routeId => dispatch(getRoute(routeId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityShow);

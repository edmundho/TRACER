import { connect } from 'react-redux';
import { getActivity } from '../../actions/ActivitiesActions';
import { getRoute } from '../../actions/RouteActions';
import ActivityShow from './activity_show';

const mapStateToProps = (state = {}, ownProps) => {
  const { activities, routes } = state.entities;
  const activityId = ownProps.match.params.activityId;
  const activity = activities[activityId];
  const route = activity && routes[activity.routeId];

  return {
    activityId: activityId,
    activity: activity,
    route: route,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getActivity: activityId => dispatch(getActivity(activityId)),
  getRoute: routeId => dispatch(getRoute(routeId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityShow);

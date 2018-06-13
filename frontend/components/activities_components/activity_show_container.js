import { connect } from 'react-redux';
import { getActivity } from '../../actions/activities_actions';
import ActivityShow from './activity_show';

const mapStateToProps = (state = {}, ownProps) => {
  const activityId = ownProps.match.params.activityId;

  return {
    activityId: activityId,
    activity: state.entities.activities[activityId],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getActivity: activityId => dispatch(getActivity(activityId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityShow);

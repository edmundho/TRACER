import { connect } from 'react-redux';
import { getAllActivities, postNewActivity } from '../../actions/activities_actions';
import ActivitiesIndex from './activities_index';

const mapStateToProps = (state = {}, ownProps) => {
  let activities = [];
  Object.values(state.entities.activities).forEach(activity => {
    activities.push(activity);
  });

  return { activities: activities };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllActivities: () => dispatch(getAllActivities()),
  postNewActivity: activity => dispatch(postNewActivity(activity))
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesIndex);
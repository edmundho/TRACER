import { connect } from 'react-redux';
import { getAllActivities } from '../../actions/activities_actions';
import ActivitiesIndex from './activities_index';

const mapStateToProps = (state = {}, ownProps) => {
  
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllActivities: () => dispatch(getAllActivities())
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesIndex);
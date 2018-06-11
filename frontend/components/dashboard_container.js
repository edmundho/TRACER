import { connect } from 'react-redux';
import { getAllRoutes } from '../actions/route_actions';
import Dashboard from './dashboard';

const mapStateToProps = (state = {}, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllRoutes: () => dispatch(getAllRoutes())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

import {
  connect
} from 'react-redux';
import {
  getAllRoutes
} from '../actions/route_actions';
import RoutesIndex from './routes_index';

const mapStateToProps = (state = {}, ownProps) => {
  // const defaultRoute = {};
  // const cyclingRoutes = state.entities.routes.cycling || defaultRoute;
  // const runningRoutes = state.entities.routes.running || defaultRoute;
  // return {
  //   routes: state.entities.routes,
  //   cyclingRoutes: cyclingRoutes,
  //   runningRoutes: runningRoutes
  // };
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllRoutes: () => dispatch(getAllRoutes())
});

export default connect(mapStateToProps, mapDispatchToProps)(RoutesIndex);

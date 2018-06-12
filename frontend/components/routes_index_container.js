import {
  connect
} from 'react-redux';
import {
  getAllRoutes
} from '../actions/route_actions';
import RoutesIndex from './routes_index';

const mapStateToProps = (state = {}, ownProps) => ({
  // currentUser: state.entities.users[state.session.id],
  // routes: state.entities.routes
  // routes: Object.keys(state.entities.routes).map(routeId => {
  //   return state.entities.routes[routeId];
  // }),
  // cyclingRoutes: Object.keys(state.entities.routes.cycling).map(routeId => {
  //   return state.entities.routes[routeId];
  // }),
  // runningRoutes: Object.keys(state.entities.routes.running).map(routeId => {
  //   return state.entities.routes[routeId];
  // })
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllRoutes: () => dispatch(getAllRoutes())
});

export default connect(mapStateToProps, mapDispatchToProps)(RoutesIndex);

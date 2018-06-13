import {
  connect
} from 'react-redux';
import {
  getAllRoutes
} from '../actions/route_actions';
import RoutesIndex from './routes_index';

const mapStateToProps = (state = {}, ownProps) => {
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
    cyclingRoutes: cyclingRoutes,
    runningRoutes: runningRoutes
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllRoutes: () => dispatch(getAllRoutes())
});

export default connect(mapStateToProps, mapDispatchToProps)(RoutesIndex);

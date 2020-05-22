import { connect } from 'react-redux';
import { postNewRoute, clearRouteErrors } from '../../actions/RouteActions';
import RouteBuilder from './route_builder';

const mapStateToProps = (state = {}, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.route
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  postNewRoute: route => dispatch(postNewRoute(route)),
  clearRouteErrors: () => dispatch(clearRouteErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteBuilder);
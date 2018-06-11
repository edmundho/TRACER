import { connect } from 'react-redux';
import { postNewRoute, clearRoutesErrors } from '../../actions/route_actions';
import RouteBuilder from './route_builder';

const mapStateToProps = (state = {}, ownProps) => ({
  currentUser: state.entities.users[state.session.id]

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  postNewRoute: route => dispatch(postNewRoute(route)),
  clearRoutesErrors: () => dispatch(clearRoutesErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteBuilder);
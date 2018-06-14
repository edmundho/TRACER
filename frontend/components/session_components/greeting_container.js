import { connect } from 'react-redux';
import Greeting from './greeting';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../../actions/session_actions';
import { showActivityForm } from '../../actions/ui_actions';

const mapStateToProps = ({ entities, session }, ownProps) => ({
  currentUser: entities.users[session.id]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logoutUser()),
  showActivityForm: () => dispatch(showActivityForm())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { loginUser } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Log In',
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(loginUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
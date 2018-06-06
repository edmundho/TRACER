import { connect } from 'react-redux';
import { signupUser } from '../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Sign Up'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(signupUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
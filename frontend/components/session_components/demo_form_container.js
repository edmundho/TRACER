import {
  connect
} from 'react-redux';
import DemoLoginForm from './demo_login_form';
import {
  loginUser
} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    demoUser: { username: 'demouser', password: 'password' },
    errors: state.errors.session,
    formType: 'Demo Log In'
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(loginUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(DemoLoginForm);
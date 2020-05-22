import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import { fadeIn } from 'react-animations';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser, clearErrors } from "../../actions/session_actions";
import { useEffect } from 'react/cjs/react.development';
import UsernameInput from './FormComponents/UsernameInput';
import PasswordInput from './FormComponents/PasswordInput';
import SubmitButton from './FormComponents/SubmitButton';

const formErrors = {
  usernameRequiredError: "Username can't be blank",
  usernameTakenError: 'Username has already been taken',
  passwordError: 'Password is too short (minimum is 6 characters)',
  firstNameError: "First name can't be blank",
  lastNameError: "Last name can't be blank"
};

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '0.5s'
  },
});

const SignupForm = () => {
  const dispatch = useDispatch();
  const formType = 'Sign Up';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('2000-01-01');

  const errors = useSelector(state => state.errors.session);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      birthDate: birthDate
    };
    dispatch(signupUser(user));
  };

  const hasUsernameRequiredError = errors.includes(formErrors.usernameRequiredError);
  const hasUsernameTakenError = errors.includes(formErrors.usernameTakenError);
  const hasUsernameError = hasUsernameRequiredError || hasUsernameTakenError;
  const hasPasswordError = errors.includes(formErrors.passwordError);
  const hasFirstNameError = errors.includes(formErrors.firstNameError);
  const hasLastNameError = errors.includes(formErrors.lastNameError);

  const usernameError = () => {
    if (hasUsernameTakenError) return formErrors.usernameTakenError;
    if (hasUsernameRequiredError) return 'Required';
    return '';
  };

  useEffect(() => {
    return () => {
      dispatch(clearErrors());
    };
  }, []);

  return (
    <div className="session-main">
      <div className={css(styles.fadeIn)}>
        <h3>{formType}</h3>
        <form id="signup-form" onSubmit={handleSubmit}>
          <p>{usernameError()}</p>
          <UsernameInput
            username={username}
            setUsername={setUsername}
            className={hasUsernameError ? 'signup-form-with-errors' : ''}
          />
          <p>{hasPasswordError && formErrors.passwordError}</p>
          <PasswordInput
            password={password}
            setPassword={setPassword}
            className={hasPasswordError ? 'signup-form-with-errors': ''}
          />
          <p>{hasFirstNameError && 'Required'}</p>
          <input
            className={hasFirstNameError ? 'signup-form-with-errors': ''}
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            placeholder="First Name" />
          <p>{hasLastNameError && "Required"}</p>
          <input
            className={hasLastNameError ? 'signup-form-with-errors': ''}
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            placeholder="Last Name" />
          <label>Date of Birth:
            <input
              type="date"
              onChange={(e) => setBirthDate(e.target.value)}
              value={birthDate} />
          </label>
          <SubmitButton formType={formType} />
        </form>

        <Link id="demo-redirect" to="/login/demo">Demo Login</Link>
      </div>
    </div>
  );
};

export default (SignupForm);
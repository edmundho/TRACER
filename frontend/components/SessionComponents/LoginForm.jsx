import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { fadeIn } from 'react-animations';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearErrors } from "../../actions/session_actions";
import UsernameInput from './FormComponents/UsernameInput';
import PasswordInput from './FormComponents/PasswordInput';
import SubmitButton from './FormComponents/SubmitButton';

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: "0.5s",
  },
});

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const formType = 'Log In';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(state => state.errors.session.map((error, i) => {
    return <li key={i}>{error}</li>;
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = Object.assign({}, { username, password });
    dispatch(loginUser(user));
  };

  const handleDemoUser = (e) => {
    if (e) {
      e.preventDefault();
    }
    const demoUser = "demouser";
    const demoPw = "password";
    setUsername(demoUser);
    setPassword(demoPw);
    setTimeout(
      () => dispatch(loginUser({ username: demoUser, password: demoPw })),
      500
    );
  };

  useEffect(() => {
    if (props.match.params.demo) {
      handleDemoUser();
    }

    return () => {
      dispatch(clearErrors());
    };
  }, []);

  return (
    <div className="session-main">
      <div className={css(styles.fadeIn)}>
        <h3>{formType}</h3>
        <ul className="errors-list">{errors}</ul>
        <form onSubmit={handleSubmit}>
          <UsernameInput username={username} setUsername={setUsername} />
          <PasswordInput password={password} setPassword={setPassword} />
          <SubmitButton formType={formType} />
        </form>

        <button onClick={handleDemoUser}>Demo Login</button>
      </div>
    </div>
  );
};

export default LoginForm;

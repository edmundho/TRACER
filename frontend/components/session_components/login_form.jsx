import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { fadeIn } from 'react-animations';
import { connect } from "react-redux";
import { loginUser, clearErrors } from "../../actions/session_actions";

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: "Log In",
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(loginUser(user)),
  clearErrors: () => dispatch(clearErrors()),
});

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: "0.5s",
  },
});

const LoginForm = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const errors = props.errors.map((error, i) => {
    return <li key={i}>{error}</li>;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = Object.assign({}, { username, password });
    props.processForm(user);
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
      () => props.processForm({ username: demoUser, password: demoPw }),
      500
    );
  };

  useEffect(() => {
    if (props.match.params.demo) {
      handleDemoUser();
    }

    return () => {
      props.clearErrors();
    };
  }, []);

  return (
    <div className="session-main">
      <div className={css(styles.fadeIn)}>
        <h3>{props.formType}</h3>
        <ul className="errors-list">{errors}</ul>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Username"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />
          <input id="submit-input" type="submit" value={props.formType} />
        </form>

        <button onClick={handleDemoUser}>Demo Login</button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

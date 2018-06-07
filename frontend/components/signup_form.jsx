import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      birthDate: '2000-01-01'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  componentWillUnmount () {
    this.props.clearErrors();
  }

  highlightIncorrectInputs (errors) {
    const usernameInput = document.getElementsByName('username')[0];
    if (errors.includes("Username can't be blank")) {
      document.getElementById('username-p').innerText = "Required";
      usernameInput.id = 'signup-form-with-errors'; 
    }
    if (errors.includes("Username has already been taken")) {
      document.getElementById('username-p').innerText = "Username has already been taken";      
      usernameInput.id = 'signup-form-with-errors';       
    }
    if (errors.includes("First name can't be blank")) {
      const firstnameInput = document.getElementsByName('first-name')[0];
      document.getElementById('first-name-p').innerText = "Required";
      firstnameInput.id = 'signup-form-with-errors';
    }
    if (errors.includes("Last name can't be blank")) {
      const lastnameInput = document.getElementsByName('last-name')[0];   
      document.getElementById('last-name-p').innerText = "Required";
      lastnameInput.id = 'signup-form-with-errors';
    }
    if (errors.includes("Password is too short (minimum is 6 characters)")) {
      const passwordInput = document.getElementsByName('password')[0];
      document.getElementById('password-p').innerText = "Password is too short (minimum is 6 characters)";
      passwordInput.id = 'signup-form-with-errors';
    }
  }

  render() {
    const errors = this.props.errors;
    this.highlightIncorrectInputs(errors);
    
    return (
      <div>
        <h3>{this.props.formType}</h3>

        <form id="signup-form" onSubmit={this.handleSubmit}>
          <p id="username-p"></p>
          <input
            name="username"
            type="text"
            onChange={this.update('username')}
            value={this.state.username}
            placeholder="Your Username" />   
          <p id="password-p"></p>
          <input
            name="password"
            type="password"
            onChange={this.update('password')}
            value={this.state.password}
            placeholder="Password" />    
          <p id="first-name-p"></p>
          <input
            name="first-name"
            type="text"
            onChange={this.update('firstName')}
            value={this.state.firstName}
            placeholder="Your First Name" />
          <p id="last-name-p"></p>
          <input
            name="last-name"
            type="text"
            onChange={this.update('lastName')}
            value={this.state.lastName}
            placeholder="Your Last Name" />
          <label>Your DOB:
            <input
              type="date"
              onChange={this.update('birthDate')}
              value={this.state.birthDate} />
          </label>
          <input id="submit-input" type="submit" value={this.props.formType} />
        </form>

        <Link id="demo-redirect" to="/login/demo">Demo Login</Link>
      </div>
    );
  }
}

export default SignupForm;
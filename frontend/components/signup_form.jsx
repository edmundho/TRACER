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

  render() {
    const errors = this.props.errors.map((error, i) => {
      return (<li key={i}>{error}</li>);
    });

    return (
      <div>
        <h3>{this.props.formType}</h3>

        <ul className="errors-list">{errors}</ul>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.update('username')}
            value={this.state.username}
            placeholder="Your Username" />
          <input
            type="password"
            onChange={this.update('password')}
            value={this.state.password}
            placeholder="Password" />
          <input
            type="text"
            onChange={this.update('firstName')}
            value={this.state.firstName}
            placeholder="Your First Name" />
          <input
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
          <input type="submit" value={this.props.formType} />
        </form>

      </div>
    );
  }
}

export default SignupForm;
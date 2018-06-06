import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class DemoLoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  componentWillMount () {
    let demoUser = { username: 'demouser', password: 'password' };
    this.setState(demoUser);
  }
  
  componentDidMount () {
    let demoUser = { username: 'demouser', password: 'password' };
    this.props.processForm(demoUser);
  }

  render() {

    return (
      <div>
        <h3>{this.props.formType}</h3>

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
          <input id="submit-input" type="submit" value={this.props.formType} />
        </form>

      </div>
    );
  }
}

export default DemoLoginForm;
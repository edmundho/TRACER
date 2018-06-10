import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
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

  handleDemoUser(e) {
    if (e) {
      e.preventDefault();
    }
    let demoUser = { username: 'demouser', password: 'password' };
    this.setState(demoUser);
    setTimeout(() => this.props.processForm(demoUser), 500);
  }

  componentDidMount () {
    if (this.props.match.params.demo) {
      this.handleDemoUser();
    }
  }

  componentWillUnmount () {
    this.props.clearErrors();
  }

  render () {
    const errors = this.props.errors.map((error, i) => {
      return (<li key={i}>{error}</li>);
    });
    
    return (
      <div className="session-main">
        <div>
          <h3>{this.props.formType}</h3>

          <ul className="errors-list">{errors}</ul>
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              onChange={this.update('username')} 
              value={this.state.username}
              placeholder="Username" />
            <input 
              type="password" 
              onChange={this.update('password')} 
              value={this.state.password} 
              placeholder="Password" />
            <input id="submit-input" type="submit" value={this.props.formType} />
          </form>
          
          <button onClick={this.handleDemoUser}>Demo Login</button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
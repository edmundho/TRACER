import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
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
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render () {
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
          <input type="submit" value={this.props.formType} />
        </form>

      </div>
    );
  }
}

export default SessionForm;
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { fadeIn, fadeOut } from 'react-animations';

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '0.5s'
  },
});

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
      <div className="session-main">
        <div className={css(styles.fadeIn)}>
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
      </div>
    );
  }
}

export default DemoLoginForm;
import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import GreetingContainer from './greeting_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1 id="test-head">TRACER</h1>
      <GreetingContainer />
    </header>
    <AuthRoute path='/login' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={SignupFormContainer} />
  </div>
);

export default App;
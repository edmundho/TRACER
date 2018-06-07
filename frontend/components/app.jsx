import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import GreetingContainer from './greeting_container';
import DemoFormContainer from './demo_form_container';
import { AuthRoute } from '../util/route_util';
import Splash from './splash';
// import NoSessionBackground from './no_session_background';

const App = () => (
  <div className="app">
    <header className="nav-bar">
      <h1>TRACER</h1>
      <GreetingContainer />
    </header>
      {/* <NoSessionBackground /> */}
    <section className="session-main">
      <Route exact path="/" component={Splash} />
      <AuthRoute path='/login/:demo' component={LoginFormContainer} />
      <AuthRoute exact path='/login/' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <AuthRoute path='/demologin' component={DemoFormContainer} />
    </section>
  </div>
);

export default App;
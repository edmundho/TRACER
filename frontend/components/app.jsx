import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import LoginFormContainer from './session_components/login_form_container';
import SignupFormContainer from './session_components/signup_form_container';
import GreetingContainer from './greeting_container';
import DemoFormContainer from './session_components/demo_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash';
// import NoSessionBackground from './no_session_background';
// import DashboardContainer from './dashboard_container';
import Dashboard from './dashboard';
import RouteBuilder from './route_builder/route_builder';

const App = () => (
  <div className="app">
      <GreetingContainer />
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute path='/login/:demo' component={LoginFormContainer} />
        <AuthRoute exact path='/login/' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <AuthRoute path='/demologin' component={DemoFormContainer} />
        <ProtectedRoute path="/routebuilder" component={RouteBuilder} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Redirect to="/dashboard"/>
      </Switch>
  </div>
);

export default App;
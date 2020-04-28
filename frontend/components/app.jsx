import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import LoginForm from './session_components/login_form';
import SignupForm from './session_components/signup_form';
import Navbar from './Navbar/Navbar';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './session_components/splash';
import DashboardContainer from './dashboard_components/dashboard_container';
import RoutesIndexContainer from './routes_index_and_components/routes_index_container';
import RouteBuilderContainer from './route_builder/route_builder_container';
import ActivitiesIndexContainer from './activities_components/activities_index_container';
import ActivityShowContainer from './activities_components/activity_show_container';

const App = () => (
  <div className="app">
      <Navbar />
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute path='/login/:demo' component={LoginForm} />
        <AuthRoute exact path='/login/' component={LoginForm} />
        <AuthRoute path='/signup' component={SignupForm} />
        <ProtectedRoute path="/routebuilder" component={RouteBuilderContainer} />
        <ProtectedRoute path="/routes" component={RoutesIndexContainer} />
        <ProtectedRoute path="/dashboard" component={DashboardContainer} />
        <ProtectedRoute path="/activities/:activityId" component={ActivityShowContainer} />
        <ProtectedRoute path="/activities" component={ActivitiesIndexContainer} />
        <Redirect to="/dashboard"/>
      </Switch>
  </div>
);

export default App;
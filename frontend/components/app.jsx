import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import LoginForm from './SessionComponents/LoginForm';
import SignupForm from './SessionComponents/SignupForm';
import Navbar from './Navbar/Navbar';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './SessionComponents/splash';
import Dashboard from './DashboardComponents/Dashboard';
import RoutesIndex from './RoutesIndexComponents/RoutesIndex';
import RouteBuilderContainer from './route_builder/route_builder_container';
import ActivitiesIndex from './activities_components/ActivitiesIndex';
import ActivityShow from './activities_components/ActivityShow';

const App = () => (
  <div className="app">
      <Navbar />
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute path='/login/:demo' component={LoginForm} />
        <AuthRoute exact path='/login/' component={LoginForm} />
        <AuthRoute path='/signup' component={SignupForm} />
        <ProtectedRoute path="/routebuilder" component={RouteBuilderContainer} />
        <ProtectedRoute path="/routes" component={RoutesIndex} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/activities/:activityId" component={ActivityShow} />
        <ProtectedRoute path="/activities" component={ActivitiesIndex} />
        <Redirect to="/dashboard"/>
      </Switch>
  </div>
);

export default App;
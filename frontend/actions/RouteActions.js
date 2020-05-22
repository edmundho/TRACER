import { fetchRoutes, postRoute, fetchRoute } from '../util/routes_api_util';

export const RECEIVE_ROUTES = "RECEIVE_ROUTES";
export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const POST_ROUTE = "POST_ROUTE";
export const RECEIVE_ROUTE_ERRORS = "RECEIVE_ROUTE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveAllRoutes = routes => ({
  type: RECEIVE_ROUTES,
  routes
});

const receiveRoute = route => ({
  type: RECEIVE_ROUTE,
  route
});

const submitRoute = route => ({
  type: POST_ROUTE,
  route
});

const receiveErrors = errors => ({
  type: RECEIVE_ROUTE_ERRORS,
  errors
});

export const clearRouteErrors = () => ({
  type: CLEAR_ERRORS
});

export const getAllRoutes = () => dispatch => fetchRoutes()
  .then(routesResponse => dispatch(receiveAllRoutes(routesResponse)),
    errors => dispatch(receiveErrors(errors.responseJSON)));

export const postNewRoute = route => dispatch => postRoute(route)
  .then(routeResponse => dispatch(submitRoute(routeResponse)),
    errors => dispatch(receiveErrors(errors.responseJSON)));

export const getRoute = routeId => dispatch => fetchRoute(routeId)
  .then(routeResponse => dispatch(receiveRoute(routeResponse)), 
    errors => dispatch(receiveErrors(errors.responseJSON)));
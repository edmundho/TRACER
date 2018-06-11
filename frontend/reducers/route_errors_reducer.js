import {
  RECEIVE_ROUTES,
  POST_ROUTE,
  RECEIVE_ROUTE_ERRORS,
  CLEAR_ERRORS
} from '../actions/route_actions';

const routeErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ROUTE_ERRORS:
      return action.errors;
    case POST_ROUTE:
      return [];
    case CLEAR_ERRORS:
      return [];
    default: 
      return state;
  }
};

export default routeErrorsReducer;
import { RECEIVE_ROUTES, POST_ROUTE } from '../actions/route_actions';
import merge from 'lodash/merge';

const routesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ROUTES:
      return action.routes;
    case POST_ROUTE:
      newState = merge({}, state, action.route);
      return newState;
    default: 
      return state;
  }
};

export default routesReducer;
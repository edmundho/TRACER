import { 
  RECEIVE_ACTIVITIES, 
  POST_ACTIVITY 
} from '../actions/activities_actions';
import merge from 'lodash/merge';

const activitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ACTIVITIES:
      return action.activities;
    case POST_ACTIVITY:
      newState = merge({}, state, action.activity);
      return newState;
    default:
      return state;
  }
};

export default activitiesReducer;
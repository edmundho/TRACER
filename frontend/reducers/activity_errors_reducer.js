import { 
  RECEIVE_ACTIVITY_ERRORS, 
  CLEAR_ERRORS,
  POST_ACTIVITY,
  RECEIVE_ACTIVITY
} from '../actions/activities_actions';

const activityErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ACTIVITY_ERRORS:
      return action.errors;
    case RECEIVE_ACTIVITY:
      return [];
    case POST_ACTIVITY:
      return [];
    case CLEAR_ERRORS:
      return [];
    default: 
      return state;
  }
};

export default activityErrorsReducer;


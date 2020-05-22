import {
  RECEIVE_ACTIVITIES,
  RECEIVE_ACTIVITY,
  POST_ACTIVITY,
  REMOVE_ACTIVITY
} from '../../actions/ActivitiesActions';
import merge from 'lodash/merge';

const activitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ACTIVITIES:
      return action.activities;
    case RECEIVE_ACTIVITY:
      return action.activity;
    case POST_ACTIVITY:
      newState = merge({}, state, {[action.activity.id]: action.activity });
      return newState;
    case REMOVE_ACTIVITY:
      newState = merge({}, state);
      delete newState[action.activityId];
      return newState;
    default:
      return state;
  }
};

export default activitiesReducer;
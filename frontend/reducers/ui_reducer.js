import { SHOW_ACTIVITY_FORM, HIDE_ACTIVITY_FORM } from '../actions/ui_actions';
import merge from 'lodash/merge';

const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case SHOW_ACTIVITY_FORM:
      newState = merge({}, state, { showActivityForm: true });
      return newState;
    case HIDE_ACTIVITY_FORM:
      newState = merge({}, merge, { showActivityForm: false });
      return newState;
    default: 
      return state; 
  }
};


export default uiReducer;
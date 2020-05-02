import merge from 'lodash/merge';
import { createAction } from 'redux-toolkit';

export const showActivityForm = createAction('SHOW_ACTIVITY_FORM');
export const hideActivityForm = createAction('HIDE_ACTIVITY_FORM');

const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case 'SHOW_ACTIVITY_FORM':
      newState = merge({}, state, { showActivityForm: true });
      return newState;
    case 'HIDE_ACTIVITY_FORM':
      newState = merge({}, merge, { showActivityForm: false });
      return newState;
    default:
      return state;
  }
};

export default uiReducer;
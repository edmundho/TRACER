import merge from 'lodash/merge';
import { createAction, createReducer } from 'redux-toolkit';

export const showActivityForm = createAction('SHOW_ACTIVITY_FORM');
export const hideActivityForm = createAction('HIDE_ACTIVITY_FORM');

const activityForm = createReducer({}, {
  [showActivityForm]: state => merge({}, state, { showActivityForm: true }),
  [hideActivityForm]: state => merge({}, state, { showActivityForm: false }),
});

export default activityForm;
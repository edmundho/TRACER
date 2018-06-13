
import { 
  fetchActivities, 
  postActivity, 
  fetchActivity } from '../util/activities_api_util';

export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const RECEIVE_ACTIVITY_ERRORS = "RECEIVE_ACTIVITY_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_ACTIVITY = "RECEIVE_ACTIVITY";

const receiveAllActivities = activities => ({
  type: RECEIVE_ACTIVITIES,
  activities
});

const submitActivity = activity => ({
  type: POST_ACTIVITY,
  activity
});

const receiveErrors = errors => ({
  type: RECEIVE_ACTIVITY_ERRORS,
  errors
});

const receiveActivity = activity => ({
  type: RECEIVE_ACTIVITY,
  activity
});

export const clearActivityErrors = () => ({
  type: CLEAR_ERRORS
});

export const getAllActivities = () => dispatch => fetchActivities()
  .then(response => dispatch(receiveAllActivities(response)), 
    errors=> dispatch(receiveErrors(errors.responseJSON)));

export const postNewActivity = activity => dispatch => postActivity(activity)
  .then(response => dispatch(submitActivity(response)), 
    errors => dispatch(receiveErrors(errors.responseJSON)));

export const getActivity = activity => dispatch => fetchActivity(activity)
  .then(response => dispatch(receiveActivity(response)),
    errors => dispatch(receiveErrors(errors.responseJSON)));
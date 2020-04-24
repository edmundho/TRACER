import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const preloadedStore = (preloadedState = {}) => (
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: [thunk],
  })
);
  
export default preloadedStore;
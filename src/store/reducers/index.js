import { combineReducers } from 'redux';
import AppReducer from './AppReducer.ts';

const rootReducer = combineReducers({
  app: AppReducer,
});

export default rootReducer;

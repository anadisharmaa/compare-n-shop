// Built-in Modules
import {combineReducers} from 'redux';

// Custom Modules
import {loadingSpinnerReducer, languageReducer} from './common';
import {factoryReducer} from './factory';
import {homeReducer} from './home';

export default combineReducers({
  loadingSpinnerReducer,
  languageReducer,
  factoryReducer,
  homeReducer
});

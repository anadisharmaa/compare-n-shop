/*
 * reducer for header component
 */
import {constants} from '../../constants';

const loadingSpinnerState = {
  status: false
};

const languageState = {
  appLanguage: 'EN_US'
};

export const languageReducer = (state = languageState, action) => {
  switch (action.type) {
    case constants.COMMON.LANGUAGE.APP_LANGUAGE:
      return {...state, appLanguage: action.payload};
    default:
      return state;
  }
};


export const loadingSpinnerReducer = (state = loadingSpinnerState, action) => {
  switch (action.type) {
    case constants.COMMON.LOADING_SPINNER.STATUS:
      return {...state, status: action.payload};
    case constants.COMMON.LOADING_SPINNER.RESET:
      return {...state, status: false};
    default:
      return state;
  }
};

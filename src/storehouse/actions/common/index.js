/*
 * Defining all the common actions
 */

import {constants} from '../../constants';

export const loadingSpinnerStatus = status => (
  {type: constants.COMMON.LOADING_SPINNER.STATUS, payload: status}
);

export const resetLoadingSpinnerStatus = () => (
  {type: constants.COMMON.LOADING_SPINNER.RESET}
);

export const setAppLanguage = language => (
  {type: constants.COMMON.LANGUAGE.APP_LANGUAGE, payload: language}
);

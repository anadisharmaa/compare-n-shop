/*
 * Defining all the common actions
 */

import {constants} from '../../constants';

export const setError = error => (
  {type: constants.FACTORY.SET_ERROR, payload: error}
);

export const resetFactory = () => (
  {type: constants.FACTORY.RESET}
);

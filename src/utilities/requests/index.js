/** **********************************************
 *  src/utilities/requests
 *
 *  handles api calls to the server
 ** **********************************************/

// Built-in Modules
import axios from 'axios';
import {push} from 'connected-react-router';

// Custom Modules
import {errorCodes, errorCodeMessages} from '../config';
import storeHouse from '../../storehouse';

const requests = {
  buildRequestConfig: (aMethod, aUrl, aData) => axios({
    method: aMethod,
    url: aUrl,
    headers: {
      user_id: sessionStorage.getItem('userId'),
      token: sessionStorage.getItem('userSession')
    },
    data: aData
  }),
  sendRequest: (aMethod, aUrl, aData, cb) => {
    // turn on loading screen indicator
    storeHouse.STORE.dispatch(storeHouse.ACTIONS.COMMON.loadingSpinnerStatus(true));

    // API call configurations
    const config = {
      method: aMethod,
      url: aUrl,
      headers: {
        token: sessionStorage.getItem('userSession')
      },
      data: aData
    };

    // sending request to the server
    axios(config)
    // handles success
      .then(response => {
        // turn off the loading screen indicator
        storeHouse.STORE.dispatch(storeHouse.ACTIONS.COMMON.loadingSpinnerStatus(false));

        // handle different errors
        switch (response.data.errorCode) {
          case errorCodes.SUCCESS:
            // call the callback method on success
            storeHouse.STORE.dispatch(storeHouse.ACTIONS.FACTORY.setError(
              {EN_US: errorCodeMessages.EN_US.SUCCESS, EN_ES: errorCodeMessages.EN_ES.SUCCESS}
            ));
            cb(response.data.data);
            break;
          case errorCodes.ERROR:
            // sets the error message
            storeHouse.STORE.dispatch(storeHouse.ACTIONS.FACTORY.setError(
              {EN_US: errorCodeMessages.EN_US.ERROR, EN_ES: errorCodeMessages.EN_ES.ERROR}
            ));
            break;
          case errorCodes.SQL_ERROR:
            // sets the error message
            storeHouse.STORE.dispatch(storeHouse.ACTIONS.FACTORY.setError(
              {EN_US: errorCodeMessages.EN_US.SQL_ERROR, EN_ES: errorCodeMessages.EN_ES.SQL_ERROR}
            ));
            break;
          case errorCodes.USER_ALREADY_PRESENT:
            // sets the error message
            storeHouse.STORE.dispatch(storeHouse.ACTIONS.FACTORY.setError(
              {EN_US: errorCodeMessages.EN_US.USER_ALREADY_PRESENT, EN_ES: errorCodeMessages.EN_ES.USER_ALREADY_PRESENT}
            ));
            break;
          case errorCodes.DUPLICATE:
            // sets the error message
            storeHouse.STORE.dispatch(storeHouse.ACTIONS.FACTORY.setError(
              {EN_US: errorCodeMessages.EN_US.DUPLICATE, EN_ES: errorCodeMessages.EN_ES.DUPLICATE}
            ));
            break;
          case errorCodes.INVALID_PASSWORD:
            // sets the error message
            storeHouse.STORE.dispatch(storeHouse.ACTIONS.FACTORY.setError(
              {EN_US: errorCodeMessages.EN_US.INVALID_PASSWORD, EN_ES: errorCodeMessages.EN_ES.INVALID_PASSWORD}
            ));
            break;
          case errorCodes.INVALID_USER:
            // sets the error message
            storeHouse.STORE.dispatch(storeHouse.ACTIONS.FACTORY.setError(
              {EN_US: errorCodeMessages.EN_US.INVALID_USER, EN_ES: errorCodeMessages.EN_ES.INVALID_USER}
            ));
            break;
          case errorCodes.USER_NOT_PRESENT:
            // sets the error message
            storeHouse.STORE.dispatch(storeHouse.ACTIONS.FACTORY.setError(
              {EN_US: errorCodeMessages.EN_US.USER_NOT_PRESENT, EN_ES: errorCodeMessages.EN_ES.USER_NOT_PRESENT}
            ));
            break;
          case errorCodes.USER_SESSION_INVALID:
            // sets the error message
            storeHouse.STORE.dispatch(storeHouse.ACTIONS.FACTORY.setError(
              {EN_US: errorCodeMessages.EN_US.USER_SESSION_INVALID, EN_ES: errorCodeMessages.EN_ES.USER_SESSION_INVALID}
            ));

            // clear session storage
            sessionStorage.clear();

            // re-direct user to signin screen
            storeHouse.STORE.dispatch(push('/signin'));
            break;
          default:
            // sets the error message
            storeHouse.STORE.dispatch(storeHouse.ACTIONS.FACTORY.setError(
              {EN_US: errorCodeMessages.EN_US.SUCCESS, EN_ES: errorCodeMessages.EN_ES.SUCCESS}
            ));
            break;
        }
      })
      // handles error
      .catch(() => {
        // turn off the loading screen indicator
        storeHouse.STORE.dispatch(storeHouse.ACTIONS.COMMON.loadingSpinnerStatus(false));

        // sets the error message
        storeHouse.STORE.dispatch(storeHouse.ACTIONS.FACTORY.setError(
          {EN_US: errorCodeMessages.EN_US.SUCCESS, EN_ES: errorCodeMessages.EN_ES.SUCCESS}
        ));
      });
  }
};

export default (requests);

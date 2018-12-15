/*
 * reducer for factory component
 */
import {constants} from '../../constants';

const initialState = {
  error: {
    EN_US: '',
    EN_ES: ''
  }
};

export const factoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.FACTORY.SET_ERROR:
      return {...state, error: action.payload};
    case constants.FACTORY.RESET:
      return {...state, error: {EN_US: '', EN_ES: ''}};
    default:
      return state;
  }
};

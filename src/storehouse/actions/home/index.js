/*
 * Defining all the home actions
 */

import {constants} from '../../constants';

export const setSelectedCategory = category => (
  {type: constants.HOME.SELECTED_CATEGORY, payload: category}
);

export const setSelectedProduct = product => (
  {type: constants.HOME.SELECTED_PRODUCT, payload: product}
);

export const addToCart = product => (
  {type: constants.HOME.ADD_TO_CART, payload: product}
);

export const buildSearchKeywords = () => (
  {type: constants.HOME.BUILD_KEYWORDS}
);

export const buildVisibleData = search => (
  {type: constants.HOME.BUILD_SEARCH_DATA, payload: search}
);

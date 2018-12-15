import {
  loadingSpinnerStatus,
  resetLoadingSpinnerStatus,
  setAppLanguage
} from './common';
import {
  setError,
  resetFactory
} from './factory';
import {
  setSelectedCategory,
  setSelectedProduct,
  addToCart,
  buildSearchKeywords,
  buildVisibleData
} from './home';

export const allActions = {
  COMMON: {
    loadingSpinnerStatus,
    resetLoadingSpinnerStatus,
    setAppLanguage
  },
  FACTORY: {
    setError,
    resetFactory
  },
  HOME: {
    setSelectedCategory,
    setSelectedProduct,
    addToCart,
    buildSearchKeywords,
    buildVisibleData
  }
};

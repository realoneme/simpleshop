import { CATEGORIES_ACTION_TYPES } from './categories.types';

const INITIAL_STATE = {
  categories: [],
  loading: false,
  error: null,
};

export const cateReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.GET_CATEGORIES_START:
      return {
        ...state,
        loading: true,
      };
    case CATEGORIES_ACTION_TYPES.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
        loading: false,
      };
    case CATEGORIES_ACTION_TYPES.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

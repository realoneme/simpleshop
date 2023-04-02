import { CATEGORIES_ACTION_TYPES } from './categories.types';
import { createAction } from '../../utils/reducer/reducer.utils';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export const getCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.GET_CATEGORIES_START);

export const getCategoriesSuccess = (categoryMap) =>
  createAction(CATEGORIES_ACTION_TYPES.GET_CATEGORIES_SUCCESS, categoryMap);

export const getCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.GET_CATEGORIES_FAILED, error);

export const getCategoriesAsync = () => async (dispatch) => {
  dispatch(getCategoriesStart());

  try {
    const categories = await getCategoriesAndDocuments('categories');
    dispatch(getCategoriesSuccess(categories));
  } catch (error) {
    dispatch(getCategoriesFailed(error));
  }
};

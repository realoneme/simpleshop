import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { getCategoriesSuccess, getCategoriesFailed } from './categories.action';

import { CATEGORIES_ACTION_TYPES } from './categories.types';

export function* getCategoriesAsync() {
  try {
    const categories = yield call(getCategoriesAndDocuments, 'categories');
    yield put(getCategoriesSuccess(categories));
  } catch (error) {
    yield put(getCategoriesFailed(error));
  }
}

export function* onGetcategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.GET_CATEGORIES_START,
    getCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onGetcategories)]);
}

import { compose, legacy_createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// redux-persist来处理store的持久化。
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root-reducer';
import thunk from 'redux-thunk';

// key和storage是固定的，blacklist用来存储本地的数据
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

// 把persistconfig和rootreducer传入persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  thunk,
].filter(Boolean);

const composedEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

// 创造一个store，并使用持久化过的reducer
export const store = legacy_createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
// 导出持久化的store
export const persistor = persistStore(store);

import { createContext, useEffect, useReducer } from 'react';
// import SHOP_DATA from '../shop-data.js';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
  // setproductData: () => null,
});

export const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES: 'SET_CATEGORIES',
};

const cateReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categoriesMap: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cateReducer`);
  }
};

const INITIAL_STATE = {
  categoriesMap: {},
};

export const CategoriesProvider = ({ children }) => {
  // const [categoriesMap, setCategoriesMap] = useState({});
  const [{ categoriesMap }, dispatch] = useReducer(cateReducer, INITIAL_STATE);

  const setCategoriesMap = (categoryMap) => {
    dispatch({
      type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
      payload: categoryMap,
    });
  };

  const value = { categoriesMap };

  useEffect(() => {
    // addCollectionAndDocuments('categories', SHOP_DATA);
    // 需要使用useEffct和async方法的时候，需要在useEffect里面重新写一个async去调用await
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

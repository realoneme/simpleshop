import { createSelector } from 'reselect';
//使用createSelector减少不必要的渲染
// 在获取的数据没有变化的情况下，就不会做再次渲染
// 比如获取到store里的数据cate，比较数据没有变化，下面的createSeletor里的取值就不会继续运行，页面也不会再渲染了
const selectCategoryReducer = (state) => state.cate;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.loading
);

import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CategoriesPreview from '../categories-previews/categories-preview.component';
import Category from '../category/category.component';
// import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { getCategoriesAsync } from '../../store/categories/categories.action';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesAsync());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=':cate' element={<Category />}></Route>
    </Routes>
  );
};
export default Shop;

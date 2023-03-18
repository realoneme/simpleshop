import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../Categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=':cate' element={<Category />}></Route>
    </Routes>
  );
};
export default Shop;

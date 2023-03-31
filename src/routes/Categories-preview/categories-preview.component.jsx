// import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { CategoriesContext } from '../../contexts/categoriescontext';
import { CategoryPreview } from '../../components/category-preview/category-preview.component';
import { selectedCategories } from '../../store/categories/categories.selector';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectedCategories);
  // const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <div key={title} className='category-preview-container'>
            <CategoryPreview products={products} title={title} />
          </div>
        );
      })}
    </>
  );
};
export default CategoriesPreview;

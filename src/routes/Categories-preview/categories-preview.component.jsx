// import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { CategoriesContext } from '../../contexts/categoriescontext';
import { CategoryPreview } from '../../components/category-preview/category-preview.component';
import {
  selectCategoriesMap,
  selectCategoriesLoading,
} from '../../store/categories/categories.selector';
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesLoading);
  // const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <div key={title} className='category-preview-container'>
              <CategoryPreview products={products} title={title} />
            </div>
          );
        })
      )}
    </>
  );
};
export default CategoriesPreview;

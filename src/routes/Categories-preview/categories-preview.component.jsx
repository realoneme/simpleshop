import { useContext } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';
import { CategoryPreview } from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
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

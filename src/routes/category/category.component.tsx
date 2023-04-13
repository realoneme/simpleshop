import { CategoryContainer, CategoryTitle } from './category.style';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { CategoriesContext } from '../../contexts/categoriescontext';
import { ProductCard } from '../../components/product-card/product-card.component';
import { selectCategoriesMap } from '../../store/categories/categories.selector';
import { selectCategoriesLoading } from '../../store/categories/categories.selector';
import Spinner from '../../components/spinner/spinner.component';
import { ICartItem } from 'components/cart-dropdown/cart-dropdown.component';

const Category = () => {
  const { cate = '' } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap); //useContext(CategoriesContext);
  const isLoading = useSelector(selectCategoriesLoading);
  const [products, setProducts] = useState(categoriesMap[cate]);
  useEffect(() => {
    setProducts(categoriesMap[cate]);
  }, [cate, categoriesMap]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <CategoryTitle>{cate.toUpperCase()}</CategoryTitle>
          <CategoryContainer>
            {products &&
              products.map((product: ICartItem) => (
                <ProductCard product={product} key={product.id} />
              ))}
          </CategoryContainer>
        </>
      )}
    </>
  );
};

export default Category;

import { CategoryContainer, CategoryTitle } from './category.style';
import { useContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categoriescontext';
import { ProductCard } from '../../components/product-card/product-card.component';
import { selectCategoriesMap } from '../../store/categories/categories.selector';

const Category = () => {
  const { cate } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap); //useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[cate]);
  useEffect(() => {
    setProducts(categoriesMap[cate]);
  }, [cate, categoriesMap]);

  return (
    <>
      <CategoryTitle>{cate.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;

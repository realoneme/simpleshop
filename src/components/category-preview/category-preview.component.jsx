import './category-preview.style.jsx';
import { Link } from 'react-router-dom';

import { ProductCard } from '../../components/product-card/product-card.component';
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.style';

export const CategoryPreview = ({ products, title }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={`/shop/${title}`}>
          <Title as='span'>{title}</Title>
        </Link>
      </h2>
      <Preview>
        {products.map((product, ind) => {
          return ind < 4 ? (
            <ProductCard product={product} key={product.id} />
          ) : null;
        })}
      </Preview>
    </CategoryPreviewContainer>
  );
};

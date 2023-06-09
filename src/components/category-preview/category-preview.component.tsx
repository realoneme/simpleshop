import './category-preview.style';
import { Link } from 'react-router-dom';

import { ProductCard } from '../product-card/product-card.component';
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.style';

import { ICartItem } from 'components/cart-dropdown/cart-dropdown.component';

interface ICategoryProps {
  products: ICartItem[];
  title: string;
}

export const CategoryPreview = ({ products, title }: ICategoryProps) => {
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

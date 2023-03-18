import {
  NameSpan,
  PriceSpan,
  Footer,
  ProductCardContainer,
} from './product-card.style.jsx';
import { Button, BUTTON_TYPES_CLASSES } from '../button/button.componente';
import { useContext } from 'react';
import { CartToggleContext } from '../../contexts/cart-dropdown.context';

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartToggleContext);
  const handleclick = () => {
    addItemToCart(product);
  };
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>${price}</PriceSpan>
      </Footer>
      <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={handleclick}>
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

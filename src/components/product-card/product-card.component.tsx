import {
  NameSpan,
  PriceSpan,
  Footer,
  ProductCardContainer,
} from './product-card.style.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { Button, BUTTON_TYPES_CLASSES } from '../button/button.componente';
// import { useContext } from 'react';
// import { CartToggleContext } from '../../contexts/cart-dropdown.context';
import { selectedCartItems } from '../../store/cart/cart.selector.js';
import { setCartItems } from '../../store/cart/cart.action.js';
import {
  selectedCartTotal,
  selectedCartTotalPrice,
} from '../../store/cart/cart.selector.js';
import {
  addCartItem,
  updateCartItemReducer,
} from '../../utils/cart/cart.utils.js';

import { ICartItemCart } from 'components/cart-item/cart-item.component';
interface IProductProps {
  product: ICartItemCart;
}
type EditCart = (item: ICartItemCart) => void;
export const ProductCard = ({ product }: IProductProps) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectedCartItems);
  const dispatch = useDispatch();
  // const { addItemToCart } = useContext(CartToggleContext);

  const addItemToCart: EditCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemReducer(
      newCartItems,
      setCartItems,
      selectedCartTotal,
      selectedCartTotalPrice,
      dispatch
    );
  };

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

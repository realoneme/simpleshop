import { useContext } from 'react';

import { CartToggleContext } from '../../contexts/cart-dropdown.context';
import {
  CartIconContainer,
  ShoppingIconStyle,
  ItemCount,
} from './cart-icon.style';

export const CartIcon = () => {
  const { status, setStatus, total } = useContext(CartToggleContext);
  const handleToggle = () => setStatus(!status);
  return (
    <CartIconContainer onClick={handleToggle}>
      <ShoppingIconStyle />
      <ItemCount>{total}</ItemCount>
    </CartIconContainer>
  );
};

// import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { CartToggleContext } from '../../contexts/cart-dropdown.context';
import {
  selectedCartStatus,
  selectedCartTotal,
} from '../../store/cart/cart.selector';
import { setCartStatus } from '../../store/cart/cart.action';
import {
  CartIconContainer,
  ShoppingIconStyle,
  ItemCount,
} from './cart-icon.style';

export const CartIcon = () => {
  const status = useSelector(selectedCartStatus);
  const total = useSelector(selectedCartTotal);
  const dispatch = useDispatch();
  // const { status, setStatus, total } = useContext(CartToggleContext);
  // const handleToggle = () => setStatus(!status);
  const handleToggle = () => {
    dispatch(setCartStatus(!status));
  };
  return (
    <CartIconContainer onClick={handleToggle}>
      <ShoppingIconStyle />
      <ItemCount>{total}</ItemCount>
    </CartIconContainer>
  );
};

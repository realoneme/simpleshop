// import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../button/button.componente';
import { CartItem } from '../cart-item/cart-item.component';
// import { CartToggleContext } from '../../contexts/cart-dropdown.context';
import {
  selectedCartStatus,
  selectedCartItems,
} from '../../store/cart/cart.selector';
import {
  CartDropDownContainer,
  CartItems,
  NoItems,
} from './cart-dropdown.style';
import { Link } from 'react-router-dom';

export interface ICartItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export const CartDropDown = () => {
  // const { status, cartItems } = useContext(CartToggleContext);
  const status = useSelector(selectedCartStatus);
  const cartItems = useSelector(selectedCartItems);
  return (
    status && (
      <CartDropDownContainer>
        <CartItems>
          {cartItems.length ? (
            cartItems.map((item: ICartItem) => (
              <CartItem cartItem={item} key={item.id} />
            ))
          ) : (
            <NoItems>Empty cart</NoItems>
          )}
          <Link to='/checkout'>
            <Button>CHECKOUT</Button>
          </Link>
        </CartItems>
      </CartDropDownContainer>
    )
  );
};

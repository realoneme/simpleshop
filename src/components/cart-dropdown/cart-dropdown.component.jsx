import { useContext } from 'react';
import { Button } from '../button/button.componente';
import { CartItem } from '../cart-item/cart-item.component';
import { CartToggleContext } from '../../contexts/cart-dropdown.context';
import {
  CartDropDownContainer,
  CartItems,
  NoItems,
} from './cart-dropdown.style';
import { Link } from 'react-router-dom';

export const CartDropDown = () => {
  const { status, cartItems } = useContext(CartToggleContext);
  return (
    status && (
      <CartDropDownContainer>
        <CartItems>
          {cartItems.length ? (
            cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
          ) : (
            <NoItems>Empty cart</NoItems>
          )}
          {}

          <Link to='/checkout'>
            <Button>CHECKOUT</Button>
          </Link>
        </CartItems>
      </CartDropDownContainer>
    )
  );
};

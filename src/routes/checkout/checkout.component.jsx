import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  CheckTotal,
} from './checkout.styles';
import { useContext } from 'react';
import { CartToggleContext } from '../../contexts/cart-dropdown.context';
import { CheckoutItem } from '../../components/checkout-item/checkout-item.component';
const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartToggleContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <CheckTotal>TOTAL: ${totalPrice}</CheckTotal>
    </CheckoutContainer>
  );
};

export default Checkout;

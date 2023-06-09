import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  CheckTotal,
} from './checkout.styles';
// import { useContext } from 'react';
import { useSelector } from 'react-redux';
// import { CartToggleContext } from '../../contexts/cart-dropdown.context';
import { CheckoutItem } from '../../components/checkout-item/checkout-item.component';
import { PaymentForm } from '../../components/payment-form/payment-form.component';
import {
  selectedCartItems,
  selectedCartTotalPrice,
} from '../../store/cart/cart.selector';
import { ICartItem } from 'components/cart-dropdown/cart-dropdown.component';

const Checkout = () => {
  // const { cartItems, totalPrice } = useContext(CartToggleContext);
  const cartItems = useSelector(selectedCartItems);
  const totalPrice = useSelector(selectedCartTotalPrice);
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
      {cartItems.map((cartItem: ICartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <CheckTotal>TOTAL: ${totalPrice}</CheckTotal>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;

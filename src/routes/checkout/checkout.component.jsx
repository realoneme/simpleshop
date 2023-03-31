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
import {
  selectedCartItems,
  selectedCartTotalPrice,
} from '../../store/cart/cart.selector';
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
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <CheckTotal>TOTAL: ${totalPrice}</CheckTotal>
    </CheckoutContainer>
  );
};

export default Checkout;

import {
  CartItemContainer,
  ImgStyle,
  ItemDetail,
  NameStyle,
} from './cart-item.styles';
import { ICartItem } from 'components/cart-dropdown/cart-dropdown.component';

export interface ICartItemCart extends ICartItem {
  quantity?: number;
}
export interface ICartProps {
  cartItem: ICartItemCart;
}
export const CartItem = ({ cartItem }: ICartProps) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <CartItemContainer>
      <ImgStyle src={imageUrl} alt={`${name}`} />
      <ItemDetail>
        <NameStyle>{name}</NameStyle>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetail>
    </CartItemContainer>
  );
};

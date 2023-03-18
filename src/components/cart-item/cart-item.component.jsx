import {
  CartItemContainer,
  ImgStyle,
  ItemDetail,
  NameStyle,
} from './cart-item.styles';
export const CartItem = ({ cartItem }) => {
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

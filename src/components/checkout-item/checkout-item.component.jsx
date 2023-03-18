import {
  CheckoutItemContainer,
  ImageContainer,
  ItemImage,
  ItemText,
  ItemQuantity,
  ArrowButton,
  ItemValue,
  RemoveButton,
} from './checkout-item.styles';
import { useContext } from 'react';
import { CartToggleContext } from '../../contexts/cart-dropdown.context';

export const CheckoutItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity, id } = cartItem;
  const { removeItemFromCart, removeSingleItem, addSingleItem } = useContext(
    CartToggleContext
  );
  const clearItemHandler = () => removeItemFromCart(id);
  const removeItemHandler = () => removeSingleItem(id);
  const addItemHandler = () => addSingleItem(id);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <ItemImage src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <ItemText> {name} </ItemText>
      <ItemQuantity>
        <ArrowButton onClick={removeItemHandler}>&#10094;</ArrowButton>
        <ItemValue>{quantity}</ItemValue>
        <ArrowButton onClick={addItemHandler}>&#10095;</ArrowButton>
      </ItemQuantity>
      <ItemText> {price}</ItemText>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

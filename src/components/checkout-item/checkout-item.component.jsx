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
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '../../store/cart/cart.action';
import { selectedCartItems } from '../../store/cart/cart.selector';
import {
  removeItem,
  addItem,
  removeCartItem,
  updateCartItemReducer,
} from '../../utils/cart/cart.utils';
import { useContext } from 'react';
import { CartToggleContext } from '../../contexts/cart-dropdown.context';

export const CheckoutItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity, id } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectedCartItems);
  // const { removeItemFromCart, removeSingleItem, addSingleItem } = useContext(
  //   CartToggleContext
  // );
  const removeItemFromCart = (removeProductId) => {
    const newCartItems = removeCartItem(cartItems, removeProductId);
    updateCartItemReducer(newCartItems, setCartItems, dispatch);
  };
  const removeSingleItem = (removeProductId) => {
    const newCartItems = removeItem(cartItems, removeProductId);
    updateCartItemReducer(newCartItems, setCartItems, dispatch);
  };
  const addSingleItem = (addProductId) => {
    const newCartItems = addItem(cartItems, addProductId);
    updateCartItemReducer(newCartItems, setCartItems, dispatch);
  };
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

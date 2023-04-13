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
import {
  selectedCartTotal,
  selectedCartTotalPrice,
} from '../../store/cart/cart.selector';
// import { useContext } from 'react';
// import { CartToggleContext } from '../../contexts/cart-dropdowncontext';

import { ICartProps } from 'components/cart-item/cart-item.component';

type UpdateCart = (id: number) => void;

export const CheckoutItem = ({ cartItem }: ICartProps) => {
  const { name, price, imageUrl, quantity, id } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectedCartItems);
  // const { removeItemFromCart, removeSingleItem, addSingleItem } = useContext(
  //   CartToggleContext
  // );
  const removeItemFromCart: UpdateCart = (removeProductId) => {
    const newCartItems = removeCartItem(cartItems, removeProductId);
    updateCartItemReducer(
      newCartItems,
      setCartItems,
      selectedCartTotal,
      selectedCartTotalPrice,
      dispatch
    );
  };
  const removeSingleItem: UpdateCart = (removeProductId: number) => {
    const newCartItems = removeItem(cartItems, removeProductId);
    updateCartItemReducer(
      newCartItems,
      setCartItems,
      selectedCartTotal,
      selectedCartTotalPrice,
      dispatch
    );
  };
  const addSingleItem: UpdateCart = (addProductId) => {
    const newCartItems = addItem(cartItems, addProductId);
    updateCartItemReducer(
      newCartItems,
      setCartItems,
      selectedCartTotal,
      selectedCartTotalPrice,
      dispatch
    );
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

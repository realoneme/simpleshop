import { CART_STATUS_TYPES } from './cart.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCartStatus = (status) =>
  createAction(CART_STATUS_TYPES.DISPLAY, status);

export const setCartItems = (cart) =>
  createAction(CART_STATUS_TYPES.EDIT_ITEM, cart);

import { CART_STATUS_TYPES } from './cart.types';
const INITIAL_STATE = {
  status: false,
  cartItems: [],
  total: 0,
  totalPrice: 0,
};
export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_STATUS_TYPES.DISPLAY:
      return {
        ...state,
        status: payload,
      };
    case CART_STATUS_TYPES.EDIT_ITEM:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

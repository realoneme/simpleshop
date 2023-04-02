import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.cart;

const selectedCartStatus = createSelector(
  [selectCartReducer],
  (cart) => cart.status
);

const selectedCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);
const selectedCartTotal = createSelector([selectedCartItems], (cartItems) =>
  cartItems.reduce((total, item) => total + item.quantity, 0)
);
const selectedCartTotalPrice = createSelector(
  [selectedCartItems],
  (cartItems) =>
    cartItems.reduce(
      (totalPrice, item) => totalPrice + item.price * item.quantity,
      0
    )
);

export {
  selectedCartStatus,
  selectedCartItems,
  selectedCartTotal,
  selectedCartTotalPrice,
};

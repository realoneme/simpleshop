const selectedCartStatus = (state) => state.cart.status;

const selectedCartItems = (state) => state.cart.cartItems;
const selectedCartTotal = (state) => state.cart.total;
const selectedCartTotalPrice = (state) => state.cart.totalPrice;

export {
  selectedCartStatus,
  selectedCartItems,
  selectedCartTotal,
  selectedCartTotalPrice,
};

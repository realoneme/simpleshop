const addCartItem = (cartItems, productToAdd) => {
  let ifExist = false;
  cartItems = cartItems.map((item) => {
    if (item && item.id === productToAdd.id) {
      ifExist = true;
      return { ...item, quantity: item.quantity + 1 };
    } else {
      return item;
    }
  });
  if (!ifExist) {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  } else {
    return cartItems;
  }
};

const removeCartItem = (cartItems, removeProductId) => {
  return cartItems.filter((item) => {
    return item.id !== removeProductId;
  });
};
const removeItem = (cartItems, id) => {
  return (cartItems = cartItems.filter((item, ind) => {
    if (item.id === id) {
      item.quantity--;
    }
    return item.quantity !== 0;
  }));
};
const addItem = (cartItems, id) => {
  return (cartItems = cartItems.map((item) => {
    if (item.id === id) {
      item.quantity++;
    }
    return item;
  }));
};

const updateCartItemReducer = (newCartItems, setCartItems, dispatch) => {
  const newTotal = newCartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const newTotalPrice = newCartItems.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );
  dispatch(
    setCartItems({
      cartItems: newCartItems,
      total: newTotal,
      totalPrice: newTotalPrice,
    })
  );
};

export {
  addCartItem,
  removeCartItem,
  removeItem,
  addItem,
  updateCartItemReducer,
};

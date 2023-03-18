import { createContext, useEffect, useState } from 'react';

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

export const CartToggleContext = createContext({
  status: false,
  setStatus: () => null,
  cartItems: [],
  addItemToCart: () => {},
  total: 0,
  removeItemFromCart: () => {},
  totalPrice: 0,
  removeSingleItem: () => {},
  addSingleItem: () => {},
});

export const CartToggleProvider = ({ children }) => {
  const [status, setStatus] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (removeProductId) => {
    setCartItems(removeCartItem(cartItems, removeProductId));
  };
  const removeSingleItem = (removeProductId) => {
    setCartItems(removeItem(cartItems, removeProductId));
  };
  const addSingleItem = (addProductId) => {
    setCartItems(addItem(cartItems, addProductId));
  };
  useEffect(() => {
    const getTotal = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const getTotalPrice = cartItems.reduce(
      (totalPrice, item) => totalPrice + item.price * item.quantity,
      0
    );
    setTotal(getTotal);
    setTotalPrice(getTotalPrice);
  }, [cartItems]);
  const value = {
    status,
    setStatus,
    cartItems,
    addItemToCart,
    total,
    removeItemFromCart,
    totalPrice,
    removeSingleItem,
    addSingleItem,
  };
  return (
    <CartToggleContext.Provider value={value}>
      {children}
    </CartToggleContext.Provider>
  );
};

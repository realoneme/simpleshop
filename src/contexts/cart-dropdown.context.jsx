import { createContext, useEffect, useState, useReducer } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  console.log(cartItems);
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

const CART_STATUS_TYPES = {
  DISPLAY: 'DISPLAY',
  EDIT_ITEM: 'EDIT_ITEM',
};

const stateReducer = (state, action) => {
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
      throw new Error(`Unhandled type ${type} in stateReducer`);
  }
};
const INITIAL_STATE = {
  status: false,
  cartItems: [],
  total: 0,
  totalPrice: 0,
};
export const CartToggleProvider = ({ children }) => {
  // const [status, setStatus] = useState(false);
  const [{ status, cartItems, total, totalPrice }, dispatch] = useReducer(
    stateReducer,
    INITIAL_STATE
  );
  const setStatus = (status) => {
    dispatch({ type: CART_STATUS_TYPES.DISPLAY, payload: status });
  };

  // const [cartItems, setCartItems] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0);
  const updateCartItemReducer = (newCartItems) => {
    const newTotal = newCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const newTotalPrice = newCartItems.reduce(
      (totalPrice, item) => totalPrice + item.price * item.quantity,
      0
    );
    dispatch({
      type: CART_STATUS_TYPES.EDIT_ITEM,
      payload: {
        cartItems: newCartItems,
        total: newTotal,
        totalPrice: newTotalPrice,
      },
    });
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };
  const removeItemFromCart = (removeProductId) => {
    const newCartItems = removeCartItem(cartItems, removeProductId);
    updateCartItemReducer(newCartItems);
  };
  const removeSingleItem = (removeProductId) => {
    const newCartItems = removeItem(cartItems, removeProductId);
    updateCartItemReducer(newCartItems);
  };
  const addSingleItem = (addProductId) => {
    const newCartItems = addItem(cartItems, addProductId);
    updateCartItemReducer(newCartItems);
  };
  // useEffect(() => {
  //   const getTotal =
  //     cartItems.reduce((total, item) => total + item.quantity, 0);
  //   const getTotalPrice =
  //     cartItems.reduce(
  //       (totalPrice, item) => totalPrice + item.price * item.quantity,
  //       0
  //     );
  // setTotal(getTotal);
  // setTotalPrice(getTotalPrice);
  // }, [cartItems]);

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

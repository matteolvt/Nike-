import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      );

      if (existingItemIndex >= 0) {
        const updatedCartItems = state.cartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
        return { ...state, cartItems: updatedCartItems };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => 
          !(item.id === action.payload.id && item.size === action.payload.size && item.color === action.payload.color)
        ),
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
      };

    case 'UPDATE_QUANTITY': {
      const { id, size, color, delta } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === id && item.size === size && item.color === color) {
            const newQuantity = item.quantity + delta;
            return { ...item, quantity: newQuantity > 0 ? newQuantity : item.quantity };
          }
          return item;
        }),
      };
    }

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  // Charger le panier depuis localStorage lors de l'initialisation
  const [state, dispatch] = useReducer(cartReducer, { cartItems: JSON.parse(localStorage.getItem('cartItems')) || [] });

  useEffect(() => {
    // Sauvegarder le panier dans localStorage lorsque cartItems change
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (id, size, color) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id, size, color } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const updateQuantity = (id, size, color, delta) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, size, color, delta } });
  };

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, addToCart, removeFromCart, clearCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

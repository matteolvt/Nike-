import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();


export const useCart = () => useContext(CartContext);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Vérifier l'article existant par ID, taille et couleur
      const existingItemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === action.payload.id && // Vérifie que c'est le même produit
          item.size === action.payload.size && // Vérifie la taille
          item.color === action.payload.color // Vérifie la couleur
      );

      if (existingItemIndex >= 0) {
        // Si l'article avec la même taille et couleur existe, on met à jour la quantité
        const updatedCartItems = state.cartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
        return { ...state, cartItems: updatedCartItems };
      } else {
        // Sinon, on ajoute l'article comme nouveau
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
              return { ...item, quantity: newQuantity > 0 ? newQuantity : item.quantity }; // Quantité ne peut pas être négative
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
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

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

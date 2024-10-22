// src/cartContext.js
import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Fonction pour ajouter un article au panier
    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    // Fonction pour vider le panier
    const clearCart = () => {
        setCartItems([]);
    };

    // Fonction pour supprimer un article du panier
    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    // Fonction pour mettre à jour la quantité d'un article
    const updateQuantity = (id, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + quantity) } : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, clearCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};

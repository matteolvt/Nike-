// SuccessPage.js
import React from 'react';
import { useCart } from './cartContext';
import { useNavigate } from 'react-router-dom'; // Utiliser useNavigate pour la redirection
import "./css/sucess.css";

const SuccessPage = () => {
  const { cartItems, clearCart } = useCart(); // Récupérer clearCart
  const navigate = useNavigate(); // Utiliser useNavigate pour rediriger

  // Calcule le total
  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleContinueShopping = () => {
    clearCart(); // Effacer le panier
    navigate('/'); // Rediriger vers la boutique
  };

  return (
    <div className="success-container"> {/* Ajout de la classe principale */}
      <h1>Thanks for your order</h1>
      <h2>Details of your order</h2>
      {cartItems.length === 0 ? (
        <p>No article in the bag</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.size} - {item.color} : {item.quantity} x {item.price}€
            </li>
          ))}
        </ul>
      )}
      <h3>Total : {totalAmount}€</h3>
      <button className="shopping" onClick={handleContinueShopping}>
        Continue your shopping
      </button>
    </div>
  );
};

export default SuccessPage;

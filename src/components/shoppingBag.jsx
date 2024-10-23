/* eslint-disable no-unused-vars */
// src/CartPage.js
import { useCart } from './cartContext';
import { Link } from 'react-router-dom';
import './css/shoppingBag.css';

const CartPage = () => {
  const { cartItems, clearCart, removeFromCart, updateQuantity } = useCart();

  const TAX_RATE = 0.2;
  const calculateTax = () => (calculateTotalPrice() * TAX_RATE).toFixed(2);
  const calculateFinalTotal = () => (parseFloat(calculateTotalPrice()) + parseFloat(calculateTax())).toFixed(2);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <div className="cart-section">
        <h1>Bag</h1>
        {cartItems.length === 0 ? (
          <p className='marge'>Your cart is empty. <Link to="/products" className="vide">Go shopping!</Link></p>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.name} className="product-image-bag" />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Size: {item.size}</p>
                  <p>Color: {item.color}</p>
                  <p>Price: {item.price}€</p>
                  <div className="quantity-controls">
                    {item.quantity === 1 ? (
                    // Si la quantité est 1, on montre un bouton "🗑️" pour supprimer l'article
                    <button onClick={() => removeFromCart(item.id, item.size, item.color)}>🗑️</button>
                    ) : (
                    // Sinon, on montre le bouton "-" pour réduire la quantité
                    <button onClick={() => updateQuantity(item.id, item.size, item.color, -1)}>-</button>
                    )}
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.size, item.color, 1)}>+</button>
                  </div>
                </div>
              </div>
            ))}
            <div className="shipping-details">
              <p>Shipping: Arrives by Wed, Oct 30</p>
            </div>
          </>
        )}
      </div>

      <div className="summary-section">
        <h2>Summary</h2>
        <div className="summary-details">
          <div className="summary-row">
            <p>Subtotal</p>
            <p>{calculateTotalPrice()}€</p>
          </div>
          <div className="summary-row">
            <p>Estimated Shipping & Handling</p>
            <p>Free</p>
          </div>
          <div className="summary-row">
            <p>Estimated Tax</p>
            <p>{calculateTax()}€</p>
          </div>
          <div className="summary-total">
            <p>Total</p>
            <p>{calculateFinalTotal()}€</p>
          </div>
        </div>
        <div className="checkout-section">
          <button className="checkout-btn">Checkout</button>
          <button className="paypal-btn">PayPal</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

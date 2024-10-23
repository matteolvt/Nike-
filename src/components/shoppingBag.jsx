// src/CartPage.js
import { useCart } from './cartContext';
import { Link } from 'react-router-dom';
import './css/shoppingBag.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51QCdJgHs61E5vpBsMETOqjZoek8o1TwoHFdB0fNWchZCeXzV50St0LqDKxZ5Lw88nXuMXJGljsEew7yHv8SZqlGz00yIW0GDhY');

const CartPage = () => {
  const { cartItems, clearCart, removeFromCart, updateQuantity } = useCart();
  const stripe = useStripe();
  const elements = useElements();

  const handleCheckout = async () => {
    const response = await fetch('http://localhost:3002/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cartItems }),
    });
  
    const session = await response.json();
  
    // Redirection vers Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  
    if (result.error) {
      console.error(result.error.message);
    }
  };

  const TAX_RATE = 0.2;
  const calculateTax = () => (calculateTotalPrice() * TAX_RATE).toFixed(2);
  const calculateFinalTotal = () => (parseFloat(calculateTotalPrice()) + parseFloat(calculateTax())).toFixed(2);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Elements stripe={stripePromise}>
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
                        <button onClick={() => removeFromCart(item.id, item.size, item.color)}>🗑️</button>
                      ) : (
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
            <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
            <button className="paypal-btn">PayPal</button>
          </div>
        </div>
      </div>
    </Elements>
  );
};

export default CartPage;

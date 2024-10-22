// src/Header.js
import { Link } from "react-router-dom";
import "./css/header.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useCart } from './cartContext';
import { useState } from "react";

const Header = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, clearCart } = useCart(); // Récupérez les éléments du panier

  // Fonction pour calculer le prix total
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <>
      <section className="before-navbar">
        <div className="bnavbar-left">
          <img src="./images/united-kingdom.png" alt="drapeau anglais" />
          <a href="">en | English</a>
        </div>
        <div className="bnavbar-center">
          <Link to="/">
            <img src="./images/fcbarcelona.png" alt="Logo du FC Barcelone" />
          </Link>
        </div>
        <div className="bnavbar-right">
          <ul>
            <li><Link to="/help">Help</Link></li>
            {isAuthenticated ? (
              <>
                <li>Salut {user.name} !</li>
                <li onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Sign out</li>
              </>
            ) : (
              <li onClick={() => loginWithRedirect()}>Sign in</li>
            )}
          </ul>
          <span className="material-icons-outlined">search</span>
          <span className="material-icons-outlined" onClick={() => setIsCartOpen(!isCartOpen)}>
            shopping_bag
            {/* Compteur d'articles */}
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </span>
          <span className="material-symbols-outlined">person</span>
          <div className="menu-ham">
            <input type="checkbox" className="check" id="menu-toggle" />
            <label htmlFor="menu-toggle" className="ham-menu">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </label>
            <ul className="menu-items">
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Kids</a></li>
              <li><a href="#">Infos pratiques</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img src="./images/logo-nikea.svg" alt="Logo Nikeä" />
          </Link>
        </div>
        <div className="navbar-center">
          <ul>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/women">Women</Link></li>
            <li><Link to="/kids">Kids</Link></li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button type="submit">
              <span className="material-icons-outlined">search</span>
            </button>
          </div>
          <div className="icons">
          <span className="material-icons-outlined">favorite_border</span>
          <span className="material-icons-outlined" onClick={() => setIsCartOpen(!isCartOpen)}>
            shopping_bag
            {cartItems.length > 0 && (
          <span className="cart-count">{cartItems.length}</span>
          )}
          </span>
          </div>
        </div>
      </section>

      {/* Affichage du panier */}
      <div className={`cart ${isCartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <span
            className="material-icons-outlined close-cart"
            onClick={() => setIsCartOpen(false)}
          >
            close
          </span>
        </div>
        <div className="cart-body">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <div className="cart-item" key={index}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>Size: {item.size}</p>
                    <p>Color: {item.color}</p>
                    <p>Price: {item.price}€</p>
                  </div>
                </div>
              ))}
              <div className="total-price">
                <h3>Total: {calculateTotalPrice()}€</h3>
              </div>
            </>
          )}
          <Link to="/shoppingBag" className="go-to-cart-btn">
            Go to Cart
          </Link>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

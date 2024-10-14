import { Link } from "react-router-dom";
import "./css/header.css";
<<<<<<< HEAD

const Header = () => {
=======
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
>>>>>>> master
  return (
    <>
      <section className="before-navbar">
        <div className="bnavbar-left">
        <img src="./images/united-kingdom.png" alt="drapeau anglais"/>
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
<<<<<<< HEAD
            <li><Link to="/join-us">Join us</Link></li>  
            <li><Link to="/sign-in">Sign in</Link></li>  
=======
            {
              isAuthenticated ? (
                <>
                <li>Salut {user.name} !</li>
                <li onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Sign out</li>
                </>
              ) : (
              <li onClick={() => loginWithRedirect()}>Sign in</li>
              )
            }
            
            
>>>>>>> master
          </ul>
        </div>
      </section>

      <section className="navbar">
<<<<<<< HEAD
        <div className="navbar-left"></div>
=======
        <div className="navbar-left">
        <Link to="/">
            <img src="./images/logo-nikea.svg" alt="Logo Nikeä" />
          </Link>
        </div>
>>>>>>> master
        <div className="navbar-center">
          <ul>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/men">Men</Link></li>  
            <li><a href="#">Women</a></li> 
            <li><a href="#">Kids</a></li>  
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
            <span className="material-icons-outlined">shopping_bag</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

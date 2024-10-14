import { Link } from "react-router-dom";
import "./css/header.css";

const Header = () => {
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
            <li><Link to="/join-us">Join us</Link></li>  
            <li><Link to="/sign-in">Sign in</Link></li>  
          </ul>
        </div>
      </section>

      <section className="navbar">
        <div className="navbar-left"></div>
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

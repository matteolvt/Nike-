/* eslint-disable react/prop-types */
import "./css/productCard.css"
import { Link } from "react-router-dom";

const ProductCard = ({ image, name, description, colors, price }) => {
  return (
    <div className="container">
      <Link to={`/product/${name}`} className="product-link">
        <img src={image} alt={name} className="product-image" />
        <div className="product-info">
          <h3>{name}</h3>
          <p className="description">{description}</p>
          <p className="colors">{colors} Colors</p>
          <p className="price">{price}€</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

/* eslint-disable react/prop-types */
import "./css/productCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ id, image, name, description, colors, price }) => {
  return (
    <div className="container">
      <Link to={`/single-item/${id}`} className="product-link">
        <img src={image} alt={name} className="product-image" />
        <div className="product-info">
          <h3>{name}</h3>
          <p className="description">{description}</p>
          <p className="colors">{colors} Color(s)</p>
          <p className="price">{price}€</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;


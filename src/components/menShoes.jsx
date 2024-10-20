import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/menShoes.css";
import ProductCard from "./productCard";

const MenShoes = () => {
  const [filters, setFilters] = useState({
    size: [],
    width: [],
    activity: [],
    color: [],
    model: [],
    price: [],
  });

  const [openFilters, setOpenFilters] = useState({
    size: false,
    width: false,
    activity: false,
    color: false,
    model: false,
    price: false,
  });

  const handleFilterChange = (category, value) => {
    setFilters((prevFilters) => {
      const isSelected = prevFilters[category].includes(value);
      return {
        ...prevFilters,
        [category]: isSelected
          ? prevFilters[category].filter((item) => item !== value)
          : [...prevFilters[category], value],
      };
    });
  };

  const toggleFilter = (id) => {
    // Gestion de l'affichage du contenu du filtre
    const element = document.getElementById(id);
    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
    setOpenFilters((prevOpenFilters) => ({
      ...prevOpenFilters,
      [id]: !prevOpenFilters[id], // Inverse l'état actuel (ouvert/fermé)
    }));
  };

  useEffect(() => {
    console.log("Filters applied:", filters);
  }, [filters]);

  const products = [
    {
      image: "./images/A_black_image.jpg",
      name: "Nike Air Force 1 ‘07",
      description: "Men Shoes",
      colors: 3,
      price: 119.99,
    },
    {
      image: "./images/A_black_image.jpg",
      name: "Nike Air Max",
      description: "Men Shoes",
      colors: 2,
      price: 129.99,
    },
    {
      image: "./images/A_black_image.jpg",
      name: "Nike Air Zoom Pegasus",
      description: "Men Shoes",
      colors: 4,
      price: 139.99,
    },
    {
      image: "./images/A_black_image.jpg",
      name: "Nike React Infinity Run",
      description: "Men Shoes",
      colors: 3,
      price: 149.99,
    },
    {
      image: "./images/A_black_image.jpg",
      name: "Nike Blazer Mid ‘77",
      description: "Men Shoes",
      colors: 3,
      price: 99.99,
    },
    {
      image: "./images/A_black_image.jpg",
      name: "Nike Air VaporMax",
      description: "Men Shoes",
      colors: 2,
      price: 199.99,
    },
    // Ajoute d'autres modèles Nike si nécessaire
  ];
  

  return (
    <>
      <section className="after-navbar">
        <div className="anavbar-left">
          <h3>Men&apos;s Shoes</h3>
          <h3 id="an-phone">Men&apos;s Shoes</h3>
        </div>
        <div className="anavbar-center">
          <Link to="/men-shoes">Shoes</Link>
          <a href="#">Clothing</a>
          <a href="#">Bag</a>
          <a href="#">Accessories</a>
        </div>
      </section>
      <main>
        <div className="main-container">
          <div className="filter-container">
            {/* Filtres de taille */}
            <div className="filter">
              <button className="filter-btn" onClick={() => toggleFilter("size")}>
                Size <span className="toggle-icon">{openFilters.size ? "-" : "+"}</span>
              </button>
              <hr />
              <div id="size" className="filter-content">
                <label className="checkbox-container">
                  Small
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange("size", "small")}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-container">
                  Medium
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange("size", "medium")}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-container">
                  Large
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange("size", "large")}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>

            {/* Répète cette structure pour chaque filtre */}
            <div className="filter">
              <button className="filter-btn" onClick={() => toggleFilter("width")}>
                Width <span className="toggle-icon">{openFilters.width ? "-" : "+"}</span>
              </button>
              <hr />
              <div id="width" className="filter-content">
                <label className="checkbox-container">
                  Regular
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange("width", "regular")}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-container">
                  Wide
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange("width", "wide")}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="filter">
              <button className="filter-btn" onClick={() => toggleFilter("activities")}>
                Activities <span className="toggle-icon">{openFilters.activities ? "-" : "+"}</span>
              </button>
              <hr />
              <div id="activities" className="filter-content">
                <label className="checkbox-container">
                  Running
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange("activities", "running")}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-container">
                  Trail
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange("activities", "Trail")}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="filter">
              <button className="filter-btn" onClick={() => toggleFilter("color")}>
                Color <span className="toggle-icon">{openFilters.color ? "-" : "+"}</span>
              </button>
              <hr />
              <div id="color" className="filter-content">
                <label className="checkbox-container">
                  Blue
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange("color", "blue")}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-container">
                  Red
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange("color", "red")}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="filter">
              <button className="filter-btn" onClick={() => toggleFilter("model")}>
                Model <span className="toggle-icon">{openFilters.model ? "-" : "+"}</span>
              </button>
              <hr />
              <div id="model" className="filter-content">
                <label className="checkbox-container">
                  Model A
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange("model", "model a")}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-container">
                  Model B
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange("model", "model b")}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="filter">
              <button className="filter-btn" onClick={() => toggleFilter("price")}>
                Price <span className="toggle-icon">{openFilters.price ? "-" : "+"}</span>
              </button>
              <hr />
              <div id="price" className="filter-content">
                <label className="checkbox-container">
                  0-25€
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange("price", "0-25")}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-container">
                  25-50€
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange("price", "25-50")}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-container">
                  50-100€
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange("price", "50-100")}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-container">
                  100-150€
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange("price", "100-150")}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-container">
                  150-200€
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange("price", "150-200")}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>

          {/* Liste des produits */}
          <div className="product-list">
            {products.map((product) => (
              <ProductCard
                key={product.name} // Utilise un identifiant unique pour chaque produit
                image={product.image}
                name={product.name}
                description={product.description}
                colors={product.colors}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default MenShoes;

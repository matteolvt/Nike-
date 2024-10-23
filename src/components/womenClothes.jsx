import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/womenClothes.css";
import ProductCard from "./productCard";

const WomenClothes = () => {
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
      id: 31,
      category: "clothes",
      image: "/images/FCB+W+NK+DF+STAD+JSY+SS+HM.jpeg",
      name: "UCL Women's home jersey 24/25 FC Barcelona",
      description: "Women Clothing",
      colors: 1,
      price: 99.99,
    },
    {
      id: 32,
      category: "clothes",
      image: "/images/FCB+W+NK+TRAVEL+SS+TOP.png",
      name: "FC Barcelona Travel",
      description: "Women Clothing",
      colors: 1,
      price: 49.99,
    },
    {
      id: 33,
      category: "clothes",
      image: "/images/25100MCW_1_7f14d3e6-1ff2-4cfa-8abc-8f51bf3fe082.webp",
      name: "UCL Women's home jersey 24/25 FC Barcelona - Dri-Fit ADV",
      description: "Women Clothing",
      colors: 1,
      price: 149.99,
    },
    {
      id: 34,
      category: "clothes",
      image: "/images/FCB+W+NK+DF+STRK+SS+TOPK.png",
      name: "FC Barcelona Strike",
      description: "Nike Short Sleeve Mesh Football Top",
      colors: 1,
      price: 49.99,
    },
    {
      id: 35,
      category: "clothes",
      image: "/images/FCB+W+NK+DF+STRK+SHORT+KZ.png",
      name: "FC Barcelona Strike Elite",
      description: "Nike Dri-FIT ADV Women's Mesh Football Training Top",
      colors: 1,
      price: 129.99,
    },
    {
      id: 36,
      category: "clothes",
      image: "/images/FCB+W+NK+DFADV+STRK+EL+DRILT+K.png",
      name: "FC Barcelona Strike Elite",
      description: "Nike Dri-FIT ADV Knit Knit Training Football Shirt",
      colors: 1,
      price: 129.99,
    },
    // Ajoute d'autres modèles Nike si nécessaire
  ];

  return (
    <>
      <section className="after-navbar">
        <div className="anavbar-left">
          <h3>Women&apos;s Clothing</h3>
          <h3 id="an-phone">Women&apos;s Clothing</h3>
        </div>
        <div className="anavbar-center">
          <Link to="/women-shoes">Shoes</Link>
          <Link to="/women-clothes">Clothing</Link>
          <Link to="/women-bags">Bag</Link>
          <Link to="/women-accessories">Accessories</Link>
        </div>
      </section>
      <main>
        <div className="main-container">
          <div className="filter-container">
            {/* Filtres de taille */}
            <div className="filter">
              <button
                className="filter-btn"
                onClick={() => toggleFilter("size")}
              >
                Size{" "}
                <span className="toggle-icon">
                  {openFilters.size ? "-" : "+"}
                </span>
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
              <button
                className="filter-btn"
                onClick={() => toggleFilter("width")}
              >
                Width{" "}
                <span className="toggle-icon">
                  {openFilters.width ? "-" : "+"}
                </span>
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
              <button
                className="filter-btn"
                onClick={() => toggleFilter("activities")}
              >
                Activities{" "}
                <span className="toggle-icon">
                  {openFilters.activities ? "-" : "+"}
                </span>
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
              <button
                className="filter-btn"
                onClick={() => toggleFilter("color")}
              >
                Color{" "}
                <span className="toggle-icon">
                  {openFilters.color ? "-" : "+"}
                </span>
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
              <button
                className="filter-btn"
                onClick={() => toggleFilter("model")}
              >
                Model{" "}
                <span className="toggle-icon">
                  {openFilters.model ? "-" : "+"}
                </span>
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
              <button
                className="filter-btn"
                onClick={() => toggleFilter("price")}
              >
                Price{" "}
                <span className="toggle-icon">
                  {openFilters.price ? "-" : "+"}
                </span>
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
              key={product.name}
              id={product.id} 
              image={product.image}
              name={product.name}
              description={product.description}
              colors={product.colors}
              price={product.price}
              product={product} 
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default WomenClothes;

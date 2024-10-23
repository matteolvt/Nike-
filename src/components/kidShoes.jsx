import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/kidsShoes.css";
import ProductCard from "./productCard";

const KidsShoes = () => {
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
      id: 37,
      category: "shoes",
      image: "/images/VOMERO+5+(GS).png",
      name: "Nike Vomero 5",
      description: "Kids Shoes",
      size: 43,
      width: "wide",
      activities: ["running"],
      color: "red",
      model: "model a",
      price: 109.99,
    },
    {
      id: 38,
      category: "shoes",
      image: "/images/NIKE+DUNK+LOW+(GS).png",
      name: "Nike Dunk Low",
      description: "Kids Shoes",
      size: 42,
      width: "regular",
      activities: ["running"],
      color: "blue",
      model: "model b",
      price: 99.99,
    },
    {
      id: 39,
      category: "shoes",
      image: "/images/AIR+JORDAN+1+RETRO+LOW+OG+(GS).png",
      name: "Air Jordan 1 Low OG (Mocha)",
      description: "Kids Shoes",
      size: 41,
      width: "wide",
      activities: ["running"],
      color: "red",
      model: "model a",
      price: 119.99,
    },
    {
      id: 40,
      category: "shoes",
      image: "/images/JR+ZOOM+SUPERFLY+10+ACAD+FGMG.png",
      name: "Nike Jr. Mercurial Superfly 10 Academy",
      description: "Kids Shoes",
      size: 40,
      width: "regular",
      activities: ["running"],
      color: "blue",
      model: "model b",
      price: 74.99,
    },
    {
      id: 41,
      category: "shoes",
      image: "/images/JR+ZM+VAPOR+16+PRO+FG.png",
      name: "Nike Jr. Mercurial Vapor 16 Pro",
      description: "Kids Shoes",
      size: 39,
      width: "wide",
      activities: ["running"],
      color: "red",
      model: "model b",
      price: 139.99,
    },
    {
      id: 42,
      category: "shoes",
      image: "/images/JR+PHANTOM+GX+II+ACADEMY+FG_MG.png",
      name: "Nike Jr. Phantom GX 2 Academy",
      description: "Kids Shoes",
      size: 38,
      width: "regular",
      activities: ["running"],
      color: "blue",
      model: "model a",
      price: 64.99,
    },
    // Ajoute d'autres modèles Nike si nécessaire
  ];

  return (
    <>
      <section className="after-navbar">
        <div className="anavbar-left">
          <h3>Kids&apos; Shoes</h3>
          <h3 id="an-phone">Kids&apos; Shoes</h3>
        </div>
        <div className="anavbar-center">
          <Link to="/kids-shoes">Shoes</Link>
          <Link to="/kids-clothes">Clothing</Link>
          <Link to="/kids-bags">Bag</Link>
          <Link to="/kids-accessories">Accessories</Link>
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

export default KidsShoes;

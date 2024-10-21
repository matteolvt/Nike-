import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/menShoes.css";
import ProductCard from "./productCard";

const MenShoes = () => {
  const [filters, setFilters] = useState({
    size: [],
    width: [],
    activities: [],
    color: [],
    model: [],
    price: [],
  });

  const [openFilters, setOpenFilters] = useState({
    size: false,
    width: false,
    activities: false,
    color: false,
    model: false,
    price: false,
  });

  const products = [
    {
      image: "./images/A_black_image.jpg",
      name: "Air Max Plus Tn Patta FC Barcelona",
      description: "Men Shoes",
      size: 43,
      width: "wide",
      activities: ["running"],
      color: "red",
      model: "model a",
      price: 119.99,
    },
    {
      image: "./images/A_black_image.jpg",
      name: "Nike Air Max Plus Drift",
      description: "Men Shoes",
      size: 42,
      width: "regular",
      activities: ["running"],
      color: "blue",
      model: "model b",
      price: 119.99,
    },
    {
      image: "./images/A_black_image.jpg",
      name: "Nike Air Zoom Pegasus",
      description: "Men Shoes",
      size: 41,
      width: "wide",
      activities: ["running"],
      color: "red",
      model: "model a",
      price: 139.99,
    },
    {
      image: "./images/A_black_image.jpg",
      name: "Nike React Infinity Run",
      description: "Men Shoes",
      size: 40,
      width: "regular",
      activities: ["running"],
      color: "blue",
      model: "model b",
      price: 149.99,
    },
    {
      image: "./images/A_black_image.jpg",
      name: "Nike Blazer Mid ‘77",
      description: "Men Shoes",
      size: 39,
      width: "wide",
      activities: ["running"],
      color: "red",
      model: "model b",
      price: 99.99,
    },
    {
      image: "./images/A_black_image.jpg",
      name: "Nike Air VaporMax",
      description: "Men Shoes",
      size: 38,
      width: "regular",
      activities: ["running"],
      color: "blue",
      model: "model a",
      price: 199.99,
    },
  ];

  const shoeSizes = [
    38, 39, 40, 40.5, 41, 41.5, 42, 42.5, 43, 43.5, 44, 44.5, 45, 46, 47
  ];

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

  const filteredProducts = products.filter((product) => {
    // Filtrage par taille
    if (filters.size.length > 0 && !filters.size.includes(product.size)) {
      return false;
    }

    // Filtrage par largeur
    if (filters.width.length > 0 && !filters.width.includes(product.width)) {
      return false;
    }

    // Filtrage par activités
    if (
      filters.activities.length > 0 &&
      !filters.activities.some((activity) =>
        product.activities.includes(activity)
      )
    ) {
      return false;
    }

    // Filtrage par couleur
    if (filters.color.length > 0 && !filters.color.includes(product.color)) {
      return false;
    }

    // Filtrage par modèle
    if (filters.model.length > 0 && !filters.model.includes(product.model)) {
      return false;
    }

    // Filtrage par prix
    if (filters.price.length > 0) {
      const priceFilter = filters.price.map((range) =>
        range.split("-").map(Number)
      );
      const isInPriceRange = priceFilter.some(
        ([min, max]) => product.price >= min && product.price <= max
      );
      if (!isInPriceRange) {
        return false;
      }
    }

    // Si tout est bon, le produit est gardé
    return true;
  });

  const toggleFilter = (id) => {
    setOpenFilters((prevOpenFilters) => ({
      ...prevOpenFilters,
      [id]: !prevOpenFilters[id],
    }));
  };

  useEffect(() => {
    console.log("Filters applied:", filters);
  }, [filters]);

  return (
    <>
      <section className="after-navbar">
        <div className="anavbar-left">
          <h3>Men&apos;s Shoes</h3>
          <h3 id="an-phone">Men&apos;s Shoes</h3>
        </div>
        <div className="anavbar-center">
          <Link to="/men-shoes">Shoes</Link>
          <Link to="/men-clothes">Clothing</Link>
          <Link to="/men-bags">Bag</Link>
          <Link to="/men-accessories">Accessories</Link>
        </div>
      </section>
      <main>
        <div className="main-container">
          <div className="filter-container">
            {/* Size Filter */}
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
              <div id="size" className="filter-content" style={{ display: openFilters.size ? "block" : "none" }}>
                <div className="size-container"> 
                  {shoeSizes.map((size) => (
                  <div key={size} className="checkbox-row">
                    <label className="checkbox-container">
                      {size}
                    <input
                      type="checkbox"
                      onChange={() => handleFilterChange("size", size)}
                    />
                    <span className="checkmark"></span>
                    </label>
                  </div>
                  ))}
                </div>
              </div>
            </div>
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
              <div id="width" className="filter-content" style={{ display: openFilters.width ? "block" : "none" }}>
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
              <div id="activities" className="filter-content" style={{ display: openFilters.activities ? "block" : "none" }}>
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
                    onChange={() => handleFilterChange("activities", "trail")}
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
              <div id="color" className="filter-content" style={{ display: openFilters.color ? "block" : "none" }}>
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
              <div id="model" className="filter-content" style={{ display: openFilters.model ? "block" : "none" }}>
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
              <div id="price" className="filter-content" style={{ display: openFilters.price ? "block" : "none" }}>
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
            {filteredProducts.length === 0 ? (
            <div className="no-products-message">
              Sorry, but there are no articles for this filter.
            </div>
            ) : (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.name}
                image={product.image}
                name={product.name}
                description={product.description}
                colors={product.colors}
                price={product.price}
              />
              ))
              )}
            </div>
          </div>
      </main>
    </>
  );
};

export default MenShoes;

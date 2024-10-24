import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/menShoes.css";
import ProductCard from "./productCard";
import ProductFilter from "./productFilter";

const MenAccessories = () => {
  // État des filtres
  const [filters, setFilters] = useState({
    size: [],
    width: [],
    activities: [],
    model: [],
    price: [],
  });

  // État des filtres ouverts
  const [openFilters, setOpenFilters] = useState({
    size: false,
    width: false,
    activities: false,
    model: false,
    price: false,
  });

  // Options de filtre
  const filterOptions = {
    size: ["Small", "Medium", "Large"],
    width: ["Regular", "Wide"],
    activities: ["Running", "Trail"],
    model: ["Model A", "Model B"],
    price: ["0-25€", "25-50€", "50-100€", "100-150€", "150-200€"],
  };

  // Liste des produits
  const products = [
    {
      id: 19,
      image: "./images/FCB+U+NK+STRIKE+KH+HAa.jpeg",
      name: "FC Barcelona Strike Home",
      description: "High football socks",
      price: 17.99,
      size: "Medium",
      width: "Regular",
      activities: "Running",
      model: "Model A",
      priceRange: "0-25€",
    },
    {
      id: 20,
      image: "./images/FCB+U+NK+STRIKE+KH+HA.png",
      name: "FC Barcelona Strike Home/Away",
      description: "Nike Dri-FIT High Football Socks",
      price: 19.99,
      size: "Medium",
      width: "Regular",
      activities: "Running",
      model: "Model B",
      priceRange: "0-25€",
    },
    {
      id: 21,
      image: "./images/FCB+K+NK+DF+CLUB+CAP+US+CB+L.png",
      name: "FC Barcelone Dri-FIT Club",
      description: "Nike Football Soft Cap for",
      price: 22.99,
      size: "Large",
      width: "Regular",
      activities: "Running",
      model: "Model A",
      priceRange: "0-25€",
    },
    {
      id: 22,
      image: "./images/FCB+U+NK+STRIKE+KH+3R.jpeg",
      name: "FC Barcelona 2024/25 Strike 3rd kit",
      description: "Nike Football High Socks",
      price: 19.99,
      size: "Medium",
      width: "Regular",
      activities: "Running",
      model: "Model A",
      priceRange: "0-25€",
    },
    {
      id: 23,
      image: "./images/BLM3BFS_1.webp",
      name: "Reversible hat crest Barça",
      description: "Accessories",
      price: 34.99,
      size: "Small",
      width: "Regular",
      activities: "Running",
      model: "Model B",
      priceRange: "25-50€",
    },
    {
      id: 24,
      image: "./images/700x1060-BLM3GBLG-2.webp",
      name: "FC Barcelona cap with crest and anthem lyrics",
      description: "Accessories",
      price: 24.99,
      size: "Small",
      width: "Regular",
      activities: "Running",
      model: "Model A",
      priceRange: "0-25€",
    },
  ];

  // Filtrage des produits en fonction des filtres sélectionnés
  const filteredProducts = products.filter((product) => {
    const sizeMatch = filters.size.length ? filters.size.includes(product.size) : true;
    const widthMatch = filters.width.length ? filters.width.includes(product.width) : true;
    const activitiesMatch = filters.activities.length ? filters.activities.includes(product.activities) : true;
    const modelMatch = filters.model.length ? filters.model.includes(product.model) : true;
    const priceMatch = filters.price.length ? filters.price.includes(product.priceRange) : true;

    return sizeMatch && widthMatch && activitiesMatch &&  modelMatch && priceMatch;
  });

  // Log des filtres appliqués
  useEffect(() => {
    console.log("Filters applied:", filters);
  }, [filters]);

  return (
    <>
      <section className="after-navbar">
        <div className="anavbar-left">
          <h3>Men&apos;s Accessories</h3>
          <h3 id="an-phone">Men&apos;s Accessories</h3>
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
          {/* Intégration du composant ProductFilter */}
          <ProductFilter
            filters={filters}
            setFilters={setFilters}
            openFilters={openFilters}
            setOpenFilters={setOpenFilters}
            filterOptions={filterOptions}
          />

          {/* Liste des produits filtrés */}
          <div className="product-list">
          {filteredProducts.length === 0 ? (
              <div className="no-products-message">
                Sorry, but there are no articles for this filter.
              </div>
            ) : (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  product={product}
                />
              ))
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default MenAccessories;

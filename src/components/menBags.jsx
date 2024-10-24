import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/menShoes.css";
import ProductCard from "./productCard";
import ProductFilter from "./productFilter";

const MenBags = () => {
  // État des filtres
  const [filters, setFilters] = useState({
    size: [],
    width: [],
    activities: [],
    color: [],
    model: [],
    price: [],
  });

  // État des filtres ouverts
  const [openFilters, setOpenFilters] = useState({
    size: false,
    width: false,
    activities: false,
    color: false,
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
      id: 13,
      image: "/images/229589-2001_1.jpg",
      name: "Backpack Barça crest",
      description: "Bags",
      colors: 1,
      price: 49.99,
      size: "Medium",
      width: "Regular",
      activity: "Running",
      model: "Model A",
      priceRange: "25-50€",
    },
    {
      id: 14,
      image: "/images/229588-2001_1.jpg",
      name: "Shoe bag Barça crest",
      description: "Bags",
      colors: 1,
      price: 29.99,
      size: "Small",
      width: "Regular",
      activity: "Running",
      model: "Model A",
      priceRange: "0-25€",
    },
    {
      id: 15,
      image: "/images/BLMP000816004-1.jpg",
      name: "Backpack FC Barcelona Navy blue",
      description: "Bags",
      colors: 1,
      price: 79.99,
      size: "Large",
      width: "Wide",
      activity: "Trail",
      model: "Model B",
      priceRange: "50-100€",
    },
    {
      id: 16,
      image: "/images/700x1060-DJ9968-410-1.webp",
      name: "Blue Barça Nike Backpack",
      description: "Bags",
      colors: 1,
      price: 29.99,
      size: "Medium",
      width: "Regular",
      activity: "Running",
      model: "Model A",
      priceRange: "0-25€",
    },
    {
      id: 17,
      image: "/images/FCB+NK+GMSK+-+SU22.png",
      name: "Nike Barça black drawstring bag",
      description: "Backpack (33 L)",
      colors: 1,
      price: 22.99,
      size: "Small",
      width: "Regular",
      activity: "Running",
      model: "Model A",
      priceRange: "0-25€",
    },
    {
      id: 18,
      image: "/images/fcb_capsula_xmas_bossa_01_mid_res_21bac3e6-a22f-4efb-985a-aa84204bfe58.webp",
      name: "Gift bag",
      description: "Bags",
      colors: 1,
      price: 5.99,
      size: "Small",
      width: "Regular",
      activity: "Running",
      model: "Model A",
      priceRange: "0-25€",
    },
  ];

  // Filtrage des produits en fonction des filtres sélectionnés
  const filteredProducts = products.filter((product) => {
    const sizeMatch = filters.size.length ? filters.size.includes(product.size) : true;
    const widthMatch = filters.width.length ? filters.width.includes(product.width) : true;
    const activityMatch = filters.activities.length ? filters.activities.includes(product.activity) : true;
    const colorMatch = filters.color.length ? filters.color.includes(product.color) : true;
    const modelMatch = filters.model.length ? filters.model.includes(product.model) : true;
    const priceMatch = filters.price.length ? filters.price.includes(product.priceRange) : true;

    return sizeMatch && widthMatch && activityMatch && colorMatch && modelMatch && priceMatch;
  });

  // Log des filtres appliqués
  useEffect(() => {
    console.log("Filters applied:", filters);
  }, [filters]);

  return (
    <>
      <section className="after-navbar">
        <div className="anavbar-left">
          <h3>Men&apos;s Bags</h3>
          <h3 id="an-phone">Men&apos;s Bags</h3>
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

export default MenBags;

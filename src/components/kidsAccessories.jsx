import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/menShoes.css";
import ProductCard from "./productCard";
import ProductFilter from "./productFilter";

const KidsAccessories = () => {
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
      id: 49,
      category: "accessories",
      subCategory: "socks",
      image: "/images/700x1060-73899-1.webp",
      name: "Home Kit socks – Junior",
      description: "Men Shoes",
      size: "Small",
      width: "Wide",
      activities: "Running",
      model: "Model B",
      price: 13.99,
    },
    {
      id: 50,
      category: "accessories",
      subCategory: "socks",
      image: "/images/unnamed_9c556ba3-cb66-4766-be8a-95ef31f748d9.webp",
      name: "FC Barcelona Socks - Boys",
      description: "Men Shoes",
      size: "Medium",
      width: "Wide",
      activities: "Running",
      model: "Model A",
      price: 13.99,
    },
    {
      id: 51,
      category: "accessories",
      subCategory: "hat",
      image: "/images/FCB+K+NK+DF+CLUB+CAP+US+CB+LR.jpeg",
      name: "FC Barcelone Dri-FIT Club",
      description: "Nike Football Soft Cap for Teens",
      size: "Large",
      width: "Regular",
      activities: "Running",
      model: "Model B",
      price: 22.99,
    },
    {
      id: 52,
      category: "accessories",
      subCategory: "hat",
      image: "/images/unnamed_f6098039-e0e0-42a4-b9e2-729d9c757740.webp",
      name: "FC Barcelona Academy",
      description: "Nike Therma-FIT Kids' Football Gloves",
      size: "Medium",
      width: "Regular",
      activities: "Running",
      model: "Model A",
      price: 24.99,
    },

  ];

  const getPriceRange = (price) => {
    if (price <= 25) return "0-25€";
    if (price <= 50) return "25-50€";
    if (price <= 100) return "50-100€";
    if (price <= 150) return "100-150€";
    return "150-200€"; // S'il est supérieur à 150€
  };

  // Filtrage des produits en fonction des filtres sélectionnés
  const filteredProducts = products.filter((product) => {
    const sizeMatch = filters.size.length ? filters.size.includes(product.size) : true;
    const widthMatch = filters.width.length ? filters.width.includes(product.width) : true;
    const activityMatch = filters.activities.length ? filters.activities.includes(product.activities) : true;
    const modelMatch = filters.model.length ? filters.model.includes(product.model) : true;

    // Détermination de la tranche de prix du produit
    const productPriceRange = getPriceRange(product.price);
    const priceMatch = filters.price.length ? filters.price.includes(productPriceRange) : true;

    return sizeMatch && widthMatch && activityMatch && modelMatch && priceMatch;
  });

  // Log des filtres appliqués
  useEffect(() => {
    console.log("Filters applied:", filters);
  }, [filters]);

  return (
    <>
      <section className="after-navbar">
        <div className="anavbar-left">
          <h3>Kids&apos;s Accessories</h3>
          <h3 id="an-phone">Kids&apos;s Accessories</h3>
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

export default KidsAccessories;

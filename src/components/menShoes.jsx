// MenShoes.js

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/menShoes.css";
import ProductCard from "./productCard";
import ProductFilter from "./productFilter";

const MenShoes = () => {
  // État pour les filtres sélectionnés
  const [filters, setFilters] = useState({
    size: [],
    width: [],
    activities: [],
    model: [],
    price: [],
  });

  // État pour l'ouverture des filtres
  const [openFilters, setOpenFilters] = useState({
    size: false,
    width: false,
    activities: false,
    model: false,
    price: false,
  });

  // Options de filtrage
  const filterOptions = {
    size: ["40", "41", "42", "43", "44", "45"],
    width: ["Regular", "Wide"],
    activities: ["Running", "Trail"],
    model: ["Model A", "Model B"],
    price: ["0-25", "25-50", "50-100", "100-150", "150-200"],
  };

  // Liste des produits
  const products = [
    {
      id: 1,
      image: "./images/fecha-de-lanzamiento-de-las-air-max-plus-x-fc-barcelona-x-patta-culers-del-món-fn8260-001.jpg",
      name: "Air Max Plus Tn Patta FC Barcelona",
      description: "Men Shoes",
      size: 43,
      width: "Wide", // Correction de la casse
      activities: ["Running"],
      model: "Model A",
      price: 119.99,
    },
    {
      id: 2,
      image: "./images/air-drift.jpg",
      name: "Nike Air Max Plus Drift",
      description: "Men Shoes",
      size: 42,
      width: "Regular",
      activities: ["Running"],
      model: "Model B",
      price: 119.99,
    },
    {
      id: 3,
      image: "./images/NIKE+AIR+PEGASUS+2005.png",
      name: "Nike Air Zoom Pegasus 2005",
      description: "Men Shoes",
      size: 41,
      width: "Wide",
      activities: ["Running"],
      model: "Model A",
      price: 139.99,
    },
    {
      id: 4,
      image: "./images/NIKE+REACTX+INFINITY+RN+4+GTX.png",
      name: "Nike React Infinity Run",
      description: "Men Shoes",
      size: 40,
      width: "Regular",
      activities: ["Running"],
      model: "Model B",
      price: 149.99,
    },
    {
      id: 5,
      image: "./images/BLAZER+MID+'77+VNTG.png",
      name: "Nike Blazer Mid ‘77",
      description: "Men Shoes",
      size: 39,
      width: "Wide",
      activities: ["Running"],
      model: "Model B",
      price: 99.99,
    },
    {
      id: 6,
      image: "./images/AIR+VAPORMAX+2023+FK.png",
      name: "Nike Air VaporMax",
      description: "Men Shoes",
      size: 38,
      width: "Regular",
      activities: ["Running"],
      model: "Model A",
      price: 199.99,
    },
  ];

  // État pour les produits filtrés
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Fonction de filtrage des produits
  const filterProducts = () => {
    const result = products.filter((product) => {
      const sizeMatch = filters.size.length ? filters.size.includes(product.size.toString()) : true;
      const widthMatch = filters.width.length ? filters.width.includes(product.width) : true;
      const activitiesMatch = filters.activities.length ? filters.activities.some(activity => product.activities.includes(activity)) : true;
      const modelMatch = filters.model.length ? filters.model.includes(product.model) : true;
      const priceMatch = filters.price.length ? filters.price.some(range => {
        const [min, max] = range.split('-').map(Number);
        return product.price >= min && product.price <= (max || Infinity);
      }) : true;

      return sizeMatch && widthMatch && activitiesMatch && modelMatch && priceMatch;
    });

    setFilteredProducts(result); // Met à jour l'état des produits filtrés
  };

  

  // Appel de filterProducts chaque fois que les filtres changent
  useEffect(() => {
    filterProducts();
  }, [filters]);

  return (
    <>
      <section className="after-navbar">
        <div className="anavbar-left">
          <h3>Men's Shoes</h3>
          <h3 id="an-phone">Men's Shoes</h3>
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
          <ProductFilter
            filters={filters}
            setFilters={setFilters}
            openFilters={openFilters}
            setOpenFilters={setOpenFilters}
            filterOptions={filterOptions} // Passez les options de filtrage ici
          />
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

export default MenShoes;

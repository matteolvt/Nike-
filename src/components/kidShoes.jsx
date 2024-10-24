// KidsShoes.js

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/menShoes.css";
import ProductCard from "./productCard";
import ProductFilter from "./productFilter"; // Assurez-vous que vous avez ce composant

const KidsShoes = () => {
  // État pour les filtres sélectionnés
  const [filters, setFilters] = useState({
    size: [],
    width: [],
    activities: [],
    color: [],
    model: [],
    price: [],
  });

  // État pour l'ouverture des filtres
  const [openFilters, setOpenFilters] = useState({
    size: false,
    width: false,
    activities: false,
    color: false,
    model: false,
    price: false,
  });

  // Options de filtrage
  const filterOptions = {
    size: ["28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38"], // Tailles pour enfants
    width: ["Regular", "Wide"],
    activities: ["Running", "Trail"],
    model: ["Model A", "Model B"],
    price: ["0-25", "25-50", "50-100", "100-150", "150-200"],
  };

  // Liste des produits
  const products = [
    {
      id: 37,
      image: "/images/VOMERO+5+(GS).png",
      name: "Nike Vomero 5",
      description: "Kids Shoes",
      size: 34,
      width: "Wide",
      activities: ["Running"],
      model: "Model A",
      price: 109.99,
    },
    {
      id: 38,
      image: "/images/NIKE+DUNK+LOW+(GS).png",
      name: "Nike Dunk Low",
      description: "Kids Shoes",
      size: 32,
      width: "Regular",
      activities: ["Running"],
      model: "Model B",
      price: 99.99,
    },
    {
      id: 39,
      image: "/images/AIR+JORDAN+1+RETRO+LOW+OG+(GS).png",
      name: "Air Jordan 1 Low OG (Mocha)",
      description: "Kids Shoes",
      size: 31,
      width: "Wide",
      activities: ["Running"],
      model: "Model A",
      price: 119.99,
    },
    {
      id: 40,
      image: "/images/JR+ZOOM+SUPERFLY+10+ACAD+FGMG.png",
      name: "Nike Jr. Mercurial Superfly 10 Academy",
      description: "Kids Shoes",
      size: 30,
      width: "Regular",
      activities: ["Running"],
      model: "Model B",
      price: 74.99,
    },
    {
      id: 41,
      image: "/images/JR+ZM+VAPOR+16+PRO+FG.png",
      name: "Nike Jr. Mercurial Vapor 16 Pro",
      description: "Kids Shoes",
      size: 33,
      width: "Wide",
      activities: ["Running"],
      model: "Model B",
      price: 139.99,
    },
    {
      id: 42,
      image: "/images/JR+PHANTOM+GX+II+ACADEMY+FG_MG.png",
      name: "Nike Jr. Phantom GX 2 Academy",
      description: "Kids Shoes",
      size: 28,
      width: "Regular",
      activities: ["Running"],
      model: "Model A",
      price: 64.99,
    },
    // Ajoutez d'autres modèles si nécessaire
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

export default KidsShoes;

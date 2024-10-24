import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/menShoes.css";
import ProductCard from "./productCard";
import ProductFilter from "./productFilter"; // Import du composant ProductFilter

const WomenShoes = () => {
  // Gestion des filtres
  const [filters, setFilters] = useState({
    size: [],
    width: [],
    activities: [],
    model: [],
    price: [],
  });

  const [openFilters, setOpenFilters] = useState({
    size: false,
    width: false,
    activities: false,
    model: false,
    price: false,
  });

  // Options de filtres à passer au composant ProductFilter
  const filterOptions = {
    size: ["40", "41", "42", "43", "44", "45"],
    width: ["Regular", "Wide"],
    activities: ["Running", "Trail"],
    model: ["Model A", "Model B"],
    price: ["0-25€", "25-50€", "50-100€", "100-150€", "150-200€"],
  };

  // Liste des produits
  const products = [
    {
      id: 25,
      category: "shoes",
      image: "/images/W+AIR+FORCE+1+'07+FLYEASE.png",
      name: "Nike Air Force 1 ‘07",
      description: "Women Shoes",
      size: 43,
      width: "Regular",
      activities: ["Running"],
      model: "Model A",
      price: 119.99,
    },
    {
      id: 26,
      category: "shoes",
      image: "/images/custom-nike-air-max-95-by-you.png",
      name: "Nike Air Max",
      description: "Women Shoes",
      size: 40,
      width: "Regular",
      activities: ["Running"],
      model: "Model A",
      price: 129.99,
    },
    {
      id: 27,
      category: "shoes",
      image: "/images/W+NIKE+AIR+PEGASUS+2005.png",
      name: "Nike Air Zoom Pegasus 2005",
      description: "Women Shoes",
      size: 39,
      width: "Regular",
      activities: ["Running"],
      model: "Model A",
      price: 139.99,
    },
    {
      id: 28,
      category: "shoes",
      image: "/images/NIKE+REACTX+INFINITY+RUN+4+W.png",
      name: "Nike React Infinity Run",
      description: "Women Shoes",
      size: 41,
      width: "Regular",
      activities: ["Running"],
      model: "Model A",
      price: 149.99,
    },
    {
      id: 29,
      category: "shoes",
      image: "/images/W+BLAZER+MID+'77.png",
      name: "Nike Blazer Mid ‘77",
      description: "Women Shoes",
      size: 43,
      width: "Regular",
      activities: ["Running"],
      model: "Model A",
      price: 99.99,
    },
    {
      id: 30,
      category: "shoes",
      image: "/images/W+AIR+VAPORMAX+2023+FK.png",
      name: "Nike Air VaporMax",
      description: "Women Shoes",
      size: 42,
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
        // Extraction des chiffres du filtre de prix (ex : "0-25€" devient "0-25")
        const [min, max] = range.replace(/[^0-9\-]/g, '').split('-').map(Number);
        return product.price >= min && product.price <= (max || Infinity);
      }) : true;
  
      return sizeMatch && widthMatch && activitiesMatch && modelMatch && priceMatch;
    });

    setFilteredProducts(result); // Mise à jour des produits filtrés
  };

  // Mise à jour des produits filtrés quand les filtres changent
  useEffect(() => {
    filterProducts();
  }, [filters]);

  return (
    <>
      <section className="after-navbar">
        <div className="anavbar-left">
          <h3>Women&apos;s Shoes</h3>
          <h3 id="an-phone">Women&apos;s Shoes</h3>
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

export default WomenShoes;

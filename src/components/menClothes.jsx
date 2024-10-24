import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/menShoes.css";
import ProductCard from "./productCard";
import ProductFilter from "./productFilter";

const MenClothes = () => {
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

  const filterOptions = {
    size: ["XS", "S", "M", "L", "XL"],
    width: ["Regular", "Wide"],
    activities: ["Running", "Trail"],
    model: ["Model A", "Model B"],
    price: ["0-25", "25-50", "50-100", "100-150", "150-200"],
  };

  const products = [
    {
      id: 7,
      size: "XS",
      width: "Regular",
      activities: ["Running"],
      model: "Model A",
      category: "clothes",
      image: "/images/FCB+M+NK+DF+JSY+SS+STAD+HM.png",
      name: "FC Barcelona Stadium Home 2024/25",
      description: "Dri-FIT replica football jersey for men",
      price: 99.99,
    },
    {
      id: 8,
      size: "S",
      width: "Regular",
      activities: ["Running"],
      model: "Model A",
      category: "clothes",
      image: "/images/FCB+MNK+DF+STRK+SS+TOP+K.png",
      name: "FC Barcelona Strike",
      description: "Short Sleeve Mesh Football Top Nike Dri-FIT for men",
      price: 49.99,
    },
    {
      id: 9,
      size: "XS",
      width: "Regular",
      activities: ["Running"],
      model: "Model A",
      category: "clothes",
      image: "/images/FCB+MNK+DF+ACDPR+SS+TOPK+HM+PM.png",
      name: "FC Barcelona Academy Pro Home",
      description: "Pre-Match Short Sleeve Football Top",
      price: 64.99,
    },
    {
      id: 10,
      size: "L",
      width: "Regular",
      activities: ["Running"],
      model: "Model A",
      category: "clothes",
      image: "/images/FCB+M+NSW+CLUB+CREW+FT+HM.png",
      name: "FC Barcelona Club Home",
      description: "Nike Football Men's Crewneck Sweatshirt",
      price: 64.99,
    },
    {
      id: 11,
      size: "M",
      width: "Regular",
      activities: ["Running"],
      model: "Model A",
      category: "clothes",
      image: "/images/FCB+M+NSW+CLUB+JGGR+FT+HM.png",
      name: "FC Barcelona Club Local",
      description: "Nike Men's French Terry Football Joggers",
      price: 64.99,
    },
    {
      id: 12,
      size: "XL",
      width: "Regular",
      activities: ["Running"],
      model: "Model A",
      category: "clothes",
      image: "/images/FCB+M+NSW+CLUB+HDY+FZ+FT+3R+GX.jpeg",
      name: "FC Barcelona Club Third",
      description: "Nike men's French Terry full-zip soccer beanie sweatshirt",
      price: 84.99,
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);

  // Fonction de filtrage des produits
  const filterProducts = () => {
    const result = products.filter((product) => {
      const sizeMatch = filters.size.length ? filters.size.includes(product.size) : true;
      const widthMatch = filters.width.length ? filters.width.includes(product.width) : true;
      const activitiesMatch = filters.activities.length ? filters.activities.some(activity => product.activities.includes(activity)) : true;
      const modelMatch = filters.model.length ? filters.model.includes(product.model) : true;
      const priceMatch = filters.price.length ? filters.price.some(range => {
        const [min, max] = range.split('-').map(Number);
        return product.price >= min && product.price <= (max || Infinity);
      }) : true;

      return sizeMatch && widthMatch && activitiesMatch && modelMatch && priceMatch;
    });

    setFilteredProducts(result);
  };

  // Appel de la fonction de filtrage à chaque changement de filtres
  useEffect(() => {
    filterProducts();
  }, [filters]);

  return (
    <>
      <section className="after-navbar">
        <div className="anavbar-left">
          <h3>Men's Clothing</h3>
          <h3 id="an-phone">Men's Clothing</h3>
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
            filterOptions={filterOptions}
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

export default MenClothes;

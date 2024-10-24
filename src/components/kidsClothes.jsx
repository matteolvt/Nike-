import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/menShoes.css";
import ProductCard from "./productCard";
import ProductFilter from "./productFilter";

const kidsClothes = () => {
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

  const filterOptions = {
    size: ["XS", "S", "M", "L", "XL"],
    width: ["Regular", "Wide"],
    activities: ["Running", "Trail"],
    model: ["Model A", "Model B"],
    price: ["0-25", "25-50", "50-100", "100-150", "150-200"],
  };

  const products = [
    {
      id: 43,
      category: "clothes",
      image: "/images/b1e72ee6_830e_41fd_8fe1_93f30b813f8e.webp",
      name: "FC Barcelona 2024/25 Stadium 3rd Kit",
      description: "Older Kids' Nike Dri-FIT Football Replica Shirt",
      size: "XS",
      width: "Regular",
      activities: ["Running"],
      model: "Model A",
      price: 79.99,
    },
    {
      id: 44,
      category: "clothes",
      image: "/images/FCB+Y+NK+DF+SHORT+STAD+3R.png",
      name: "FC Barcelona 2024/25 Stadium 3rd Kit",
      description: "Replica Nike Dri-FIT Football Shorts - Boy / Girl",
      size: "S",
      width: "Regular",
      activities: ["Running"],
      model: "Model A",
      price: 39.99,
    },
    {
      id: 45,
      category: "clothes",
      image: "/images/FCB+LK+NK+DF+KIT+STAD+3R.png",
      name: "FC Barcelona 2024/25 Stadium 3rd Kit",
      description: "Nike Football Replica Three-Piece Kit - Toddler",
      size: "L",
      width: "Regular",
      activities: ["Running"],
      model: "Model A",
      price: 69.99,
    },
    {
      id: 46,
      category: "clothes",
      image: "/images/FCB+Y+NK+DF+JSY+SS+STAD+HM.jpeg",
      name: "FC Barcelona Strike 3rd Kit",
      description: "Nike Dri-FIT Replica Football Shirt - Boy / Girl",
      size: "XL",
      width: "Regular",
      activities: ["Running"],
      model: "Model A",
      price: 79.99,
    },
    {
      id: 47,
      category: "clothes",
      image: "/images/FCB+YNK+DF+ACDPR+SS+TOP+K+AWPM.png",
      name: "FC Barcelona Academy Pro",
      description: "Nike Dri-FIT Youth Soccer Training Top",
      size: "M",
      width: "Regular",
      activities: ["Running"],
      model: "Model A",
      price: 59.99,
    },
    {
      id: 48,
      category: "clothes",
      image: "/images/FCB+YNK+DF+STRK+DRILL+TOP+K.jpeg",
      name: "FC Barcelona Strike Third",
      description: "Nike Dri-FIT Training Football Shirt - Boy/Girl",
      size: "XS",
      width: "Regular",
      activities: ["Running"],
      model: "Model A",
      price: 39.99,
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);

  // Fonction de filtrage des produits
  const filterProducts = () => {
    const result = products.filter((product) => {
      const sizeMatch = filters.size.length ? filters.size.includes(product.size) : true;
      const widthMatch = filters.width.length ? filters.width.includes(product.width) : true;
      const activitiesMatch = filters.activities.length
        ? filters.activities.some((activity) => product.activities.includes(activity))
        : true;
      const modelMatch = filters.model.length ? filters.model.includes(product.model) : true;
      const priceMatch = filters.price.length
        ? filters.price.some((range) => {
            const [min, max] = range.split("-").map(Number);
            return product.price >= min && product.price <= (max || Infinity);
          })
        : true;

      return sizeMatch && widthMatch && activitiesMatch && modelMatch && priceMatch;
    });

    setFilteredProducts(result);
  };

  useEffect(() => {
    filterProducts();
  }, [filters]);

  return (
    <>
      <section className="after-navbar">
        <div className="anavbar-left">
          <h3>Women's Clothing</h3>
          <h3 id="an-phone">Women's Clothing</h3>
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

export default kidsClothes

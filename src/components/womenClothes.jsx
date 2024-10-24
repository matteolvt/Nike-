import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/menShoes.css";
import ProductCard from "./productCard";
import ProductFilter from "./productFilter"; // Assuming you have the same component for filtering

const WomenClothes = () => {
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
      id: 31,
      size: "XS",
      width: "Regular",
      activities: ["Running"],
      model: "Model A",
      category: "clothes",
      image: "/images/FCB+W+NK+DF+STAD+JSY+SS+HM.jpeg",
      name: "UCL Women's home jersey 24/25 FC Barcelona",
      description: "Women Clothing",
      price: 99.99,
    },
    {
      id: 32,
      size: "S",
      width: "Regular",
      activities: ["Running"],
      model: "Model A",
      category: "clothes",
      image: "/images/FCB+W+NK+TRAVEL+SS+TOP.png",
      name: "FC Barcelona Travel",
      description: "Women Clothing",
      price: 49.99,
    },
    {
      id: 33,
      size: "M",
      width: "Regular",
      activities: ["Running"],
      model: "Model A",
      category: "clothes",
      image: "/images/25100MCW_1_7f14d3e6-1ff2-4cfa-8abc-8f51bf3fe082.webp",
      name: "UCL Women's home jersey 24/25 FC Barcelona - Dri-Fit ADV",
      description: "Women Clothing",
      price: 149.99,
    },
    {
      id: 34,
      size: "L",
      width: "Wide",
      activities: ["Trail"],
      model: "Model B",
      category: "clothes",
      image: "/images/FCB+W+NK+DF+STRK+SS+TOPK.png",
      name: "FC Barcelona Strike",
      description: "Nike Short Sleeve Mesh Football Top",
      price: 49.99,
    },
    {
      id: 35,
      size: "XL",
      width: "Regular",
      activities: ["Running"],
      model: "Model A",
      category: "clothes",
      image: "/images/FCB+W+NK+DF+STRK+SHORT+KZ.png",
      name: "FC Barcelona Strike Elite",
      description: "Nike Dri-FIT ADV Women's Mesh Football Training Top",
      price: 129.99,
    },
    {
      id: 36,
      size: "M",
      width: "Wide",
      activities: ["Running"],
      model: "Model B",
      category: "clothes",
      image: "/images/FCB+W+NK+DFADV+STRK+EL+DRILT+K.png",
      name: "FC Barcelona Strike Elite",
      description: "Nike Dri-FIT ADV Knit Training Football Shirt",
      price: 129.99,
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
          <Link to="/women-shoes">Shoes</Link>
          <Link to="/women-clothes">Clothing</Link>
          <Link to="/women-bags">Bag</Link>
          <Link to="/women-accessories">Accessories</Link>
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

export default WomenClothes;

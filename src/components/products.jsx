import "./css/products.css";
import { Link } from "react-router-dom";

const ProductWomen = () => {
  return (
    <>
      <section className="after-navbar">
        <div className="anavbar-left">
          <h3>Products</h3>
          <h3 id="an-phone">Women&apos;s Products</h3>
        </div>
        <div className="anavbar-center">
          <Link to="/women-shoes">Shoes</Link>
          <Link to="/women-clothes">Clothing</Link>
          <Link to="/women-bags">Bag</Link>
          <Link to="/women-accessories">Accessories</Link>
        </div>
      </section>
      <main>
        <section className="pc-part">
          <section className="presentation">
            <div className="pres-txt">
              <p>New arrivals</p>
            </div>
            <div className="pres-img">
              <div className="pres-img-1">
                <img src="./images/A_black_image.jpg" alt="" />
                <img src="./images/A_black_image.jpg" alt="" />
              </div>
              <div className="pres-img-2">
                <img src="./images/A_black_image.jpg" alt="" />
                <img src="./images/A_black_image.jpg" alt="" />
              </div>
            </div>
          </section>

          <section className="products">
            <div className="product-txt">
              <p>Find Your Style</p>
            </div>
            <div className="product-img">
              <img src="./images/A_black_image.jpg" alt="" />
              <img src="./images/A_black_image.jpg" alt="" />
              <img src="./images/A_black_image.jpg" alt="" />
            </div>
          </section>
        </section>
        <section className="phone-part"></section>
      </main>
    </>
  );
};

export default ProductWomen;

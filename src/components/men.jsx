import "./css/men.css"
import { Link } from "react-router-dom";

const ProductMen = () => {
  return (
   <>
    <section className="after-navbar">
        <div className="anavbar-left">
            <h3>Men</h3>
            <h3 id="an-phone">Men&apos;s Products</h3>
        </div>
        <div className="anavbar-center">
            <Link to="/men-shoes">Shoes</Link>
            <a href="">Clothing</a>
            <a href="">Bag</a>
            <a href="">Accessories</a>
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
      <section className="phone-part">

      </section>
    </main>
   </>
  );
};

export default ProductMen;

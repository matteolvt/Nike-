import "./css/footer.css"

const Footer = () => {
    return (
        <>
        <section className="footer">
      <div className="footer-top">
        <div className="terms-of-sales">
          <h3><a href="#">Terms of sale</a></h3>
          <div className="payments-box"></div>
        </div>
        <div className="help">
          <h3><a href="#">Help</a></h3>
          <ul>
            <li><a href="#">Get Help</a></li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Shipping and Delivery</a></li>
            <li><a href="#">Order Cancellation</a></li>
            <li><a href="#">Payment Status</a></li>
          </ul>
        </div>
        <div className="company">
          <h3><a href="#">Company</a></h3>
          <ul>
            <li><a href="#">About Nikeä</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">&copy; 2024 Nikeä</div>
    </section>
        </>
    );
}

export default Footer
import "./css/itemsList.css"

const ItemsList = () => {
    return(
        <>
        <section className="list-of-items">
      <div className="shoes">
        <div className="shoes-title">
          <a href="#">Shoes -&gt;</a>
        </div>
        <div className="shoes-items">
          <div className="shoes-item1"></div>
          <div className="shoes-item2"></div>
          <div className="shoes-item3"></div>
        </div>
      </div>

      <div className="clothes">
        <div className="clothes-title">
          <a href="#">Clothes -&gt;</a>
        </div>
        <div className="clothes-items">
          <div className="clothes-item1"></div>
          <div className="clothes-item2"></div>
          <div className="clothes-item3"></div>
        </div>
      </div>

      <div className="news">
        <div className="news-title">
          <a href="#">News</a>
        </div>
        <div className="news-items">
          <div className="news-item1"></div>
          <div className="news-item2"></div>
          <div className="news-item3"></div>
        </div>
      </div>
    </section>
        </>
    );
}

export default ItemsList
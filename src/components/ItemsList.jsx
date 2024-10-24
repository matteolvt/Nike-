import "./css/itemsList.css"
import { Link } from "react-router-dom";

const ItemsList = () => {
    return(
        <>
        <section className="list-of-items">
      <div className="shoes">
        <div className="shoes-title">
          <Link to="/products">Shoes -&gt;</Link>
        </div>
        <div className="shoes-items">
          <div className="shoes-item1">
            <img src="./images/W+AIR+FORCE+1+'07+FLYEASE.png" alt="" />
          </div>
          <div className="shoes-item2">
            <img src="./images/W+NIKE+DUNK+LOW+NEXT+NATURE.png" alt="" />
          </div>
          <div className="shoes-item3">
            <img src="./images/JR+ZM+VAPOR+16+PRO+FG.png" alt="" />
          </div>
        </div>
      </div>

      <div className="clothes">
        <div className="clothes-title">
        <Link to="/products">Clothes -&gt;</Link>
        </div>
        <div className="clothes-items">
          <div className="clothes-item1">
            <img src="./images/FCB+M+NK+DF+JSY+SS+STAD+HM.png" alt="" />
          </div>
          <div className="clothes-item2">
            <img src="./images/FCB+M+NK+DF+JSY+SS+STAD+3R.png" alt="" />
          </div>
          <div className="clothes-item3">
            <img src="./images/FCB+W+NK+DFADV+STRK+EL+DRILT+K.png" alt="" />
          </div>
        </div>
      </div>

      <div className="news">
        <div className="news-title">
          {/* <a href="#">News</a> */}
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
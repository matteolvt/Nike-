import "./css/singleItem.css"
const SingleItem = () => {
  return (
    <>
      <div id="cart-panel" className="cart-panel">
        <button id="close-cart">x</button>
        <h2>Your Bag</h2>
        <p>Your bag is empty</p>
      </div>
      <main>
        <div className="product-container">
          <div className="carousel-wrapper">
            <div className="carousel-container">
              <div className="thumbnails" id="thumbnailContainer"></div>
              <div className="carousel" id="myCarousel">
                <div className="carousel-inner" id="carouselInner">
                  {/* Ajoutez les balises img pour chaque image */}
                  <div className="carousel-item">
                    <img src="./images/NIKE+DUNK+LOW.png" alt="Product 1" />
                  </div>
                  <div className="carousel-item">
                    <img src="./images/NIKE+DUNK+LOW.jpeg" alt="Product 2" />
                  </div>
                  <div className="carousel-item">
                    <img src="./images/A_black_image.jpg" alt="Product 3" />
                  </div>
                  <div className="carousel-item">
                    <img src="./images/A_black_image.jpg" alt="Product 4" />
                  </div>
                  <div className="carousel-item">
                    <img src="./images/A_black_image.jpg" alt="Product 5" />
                  </div>
                  {/* Ajoutez d'autres images de la même manière */}
                </div>
              </div>
            </div>
          </div>

          <section className="product">
            <div className="infos">
              <h2>Nike Air Force 1 ‘07</h2>
              <p className="description">Men Shoes</p>
              <p className="price">119.99€</p>

              <div className="color-container">
                <div className="color">
                  <input
                    type="radio"
                    name="options"
                    id="color_1"
                    value="red"
                    defaultChecked
                  />
                  <label htmlFor="color_1"></label>

                  <input
                    type="radio"
                    name="options"
                    id="color_2"
                    value="blue"
                  />
                  <label htmlFor="color_2"></label>

                  <input
                    type="radio"
                    name="options"
                    id="color_3"
                    value="green"
                  />
                  <label htmlFor="color_3"></label>
                </div>
              </div>

              <div className="size-container">
                <div className="size">
                  <ul className="product_size">
                    <li className="size_1">
                      <input type="radio" name="size" id="size_1" value="38" />
                      <label htmlFor="size_1">38</label>
                    </li>
                    <li className="size_1">
                      <input type="radio" name="size" id="size_2" value="39" />
                      <label htmlFor="size_2">39</label>
                    </li>
                    <li className="size_1">
                      <input type="radio" name="size" id="size_3" value="40" />
                      <label htmlFor="size_3">40</label>
                    </li>
                    <li className="size_1">
                      <input
                        type="radio"
                        name="size"
                        id="size_4"
                        value="40.5"
                      />
                      <label htmlFor="size_4">40.5</label>
                    </li>
                    <li className="size_1">
                      <input type="radio" name="size" id="size_5" value="41" />
                      <label htmlFor="size_5">41</label>
                    </li>
                    <li className="size_1">
                      <input
                        type="radio"
                        name="size"
                        id="size_6"
                        value="41.5"
                      />
                      <label htmlFor="size_6">41.5</label>
                    </li>
                    <li className="size_1">
                      <input type="radio" name="size" id="size_7" value="42" />
                      <label htmlFor="size_7">42</label>
                    </li>
                    <li className="size_1">
                      <input
                        type="radio"
                        name="size"
                        id="size_8"
                        value="42.5"
                      />
                      <label htmlFor="size_8">42.5</label>
                    </li>
                    <li className="size_1">
                      <input type="radio" name="size" id="size_9" value="43" />
                      <label htmlFor="size_9">43</label>
                    </li>
                    <li className="size_1">
                      <input
                        type="radio"
                        name="size"
                        id="size_10"
                        value="43.5"
                      />
                      <label htmlFor="size_10">43.5</label>
                    </li>
                    <li className="size_1">
                      <input type="radio" name="size" id="size_11" value="44" />
                      <label htmlFor="size_11">44</label>
                    </li>
                    <li className="size_1">
                      <input
                        type="radio"
                        name="size"
                        id="size_12"
                        value="44.5"
                      />
                      <label htmlFor="size_12">44.5</label>
                    </li>
                    <li className="size_1">
                      <input type="radio" name="size" id="size_13" value="45" />
                      <label htmlFor="size_13">45</label>
                    </li>
                    <li className="size_1">
                      <input type="radio" name="size" id="size_14" value="46" />
                      <label htmlFor="size_14">46</label>
                    </li>
                    <li className="size_1">
                      <input type="radio" name="size" id="size_15" value="47" />
                      <label htmlFor="size_15">47</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="cliquable">
              <button className="button">Add to Bag</button>
              <button className="button" id="fav">
                Add to Favorite
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default SingleItem;

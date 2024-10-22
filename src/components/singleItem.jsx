import { useState } from "react";
import { useCart } from './cartContext';
import "./css/singleItem.css";

const SingleItem = () => {
  const { addToCart } = useCart(); // Récupérer la fonction d'ajout au panier
  const [selectedSize, setSelectedSize] = useState(""); // État pour la taille sélectionnée
  const [selectedColor, setSelectedColor] = useState("red"); // État pour la couleur sélectionnée

  const handleAddToBag = () => {
    if (!selectedSize) {
      alert("Please select a size."); // Alerte si aucune taille n'est sélectionnée
      return;
    }

    // Créez un nouvel objet produit
    const newItem = {
      name: "Nike Air Force 1 ‘07",
      price: 119.99,
      size: selectedSize,
      color: selectedColor,
      image: "./images/NIKE+DUNK+LOW.png",
      quantity: 1,
    };

    addToCart(newItem); // Ajouter l'article au panier via le contexte
  };

  return (
    <>
      <main>
        <div className="product-container">
          <div className="carousel-wrapper">
            <div className="carousel-container">
              <div className="thumbnails" id="thumbnailContainer"></div>
              <div className="carousel" id="myCarousel">
                <div className="carousel-inner" id="carouselInner">
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
                    onChange={() => setSelectedColor("red")} // Mise à jour de la couleur sélectionnée
                  />
                  <label htmlFor="color_1"></label>

                  <input
                    type="radio"
                    name="options"
                    id="color_2"
                    value="blue"
                    onChange={() => setSelectedColor("blue")}
                  />
                  <label htmlFor="color_2"></label>

                  <input
                    type="radio"
                    name="options"
                    id="color_3"
                    value="green"
                    onChange={() => setSelectedColor("green")}
                  />
                  <label htmlFor="color_3"></label>
                </div>
              </div>

              <div className="size-container">
                <div className="size">
                  <ul className="product_size">
                    <li className="size_1">
                      <input type="radio" name="size" id="size_1" value="38" onChange={() => setSelectedSize("38")} />
                      <label htmlFor="size_1">38</label>
                    </li>
                    <li className="size_1">
                      <input type="radio" name="size" id="size_2" value="39" onChange={() => setSelectedSize("39")} />
                      <label htmlFor="size_2">39</label>
                    </li>
                    <li className="size_1">
                      <input type="radio" name="size" id="size_3" value="40" onChange={() => setSelectedSize("40")} />
                      <label htmlFor="size_3">40</label>
                    </li>
                    <li className="size_1">
                      <input type="radio" name="size" id="size_4" value="40.5" onChange={() => setSelectedSize("40.5")} />
                      <label htmlFor="size_4">40.5</label>
                    </li>
                    <li className="size_1">
                      <input type="radio" name="size" id="size_5" value="41" onChange={() => setSelectedSize("41")} />
                      <label htmlFor="size_5">41</label>
                    </li>
                    <li className="size_1">
                      <input type="radio" name="size" id="size_6" value="41.5" onChange={() => setSelectedSize("41.5")} />
                      <label htmlFor="size_6">41.5</label>
                    </li>
                    <li className="size_1">
                      <input type="radio" name="size" id="size_7" value="42" onChange={() => setSelectedSize("42")} />
                      <label htmlFor="size_7">42</label>
                    </li>
                    <li className="size_1">
                      <input type="radio" name="size" id="size_8" value="42.5" onChange={() => setSelectedSize("42.5")} />
                      <label htmlFor="size_8">42.5</label>
                    </li>
                    <li className="size_1">
                      <input type="radio" name="size" id="size_9" value="43" onChange={() => setSelectedSize("43")} />
                      <label htmlFor="size_9">43</label>
                    </li>
                    <li className="size_1">
                      <input type="radio" name="size" id="size_10" value="43.5" onChange={() => setSelectedSize("43.5")} />
                      <label htmlFor="size_10">43.5</label>
                    </li>
                    <li className="size_1">
                      <input type="radio" name="size" id="size_11" value="44" onChange={() => setSelectedSize("44")} />
                      <label htmlFor="size_11">44</label>
                    </li>
                    <li className="size_1">
                      <input type="radio" name="size" id="size_12" value="44.5" onChange={() => setSelectedSize("44.5")} />
                      <label htmlFor="size_12">44.5</label>
                    </li>
                    <li className="size_1">
                      <input type="radio" name="size" id="size_13" value="45" onChange={() => setSelectedSize("45")} />
                      <label htmlFor="size_13">45</label>
                    </li>
                    <li className="size_1">
                      <input type="radio" name="size" id="size_14" value="46" onChange={() => setSelectedSize("46")} />
                      <label htmlFor="size_14">46</label>
                    </li>
                    <li className="size_1">
                      <input type="radio" name="size" id="size_15" value="47" onChange={() => setSelectedSize("47")} />
                      <label htmlFor="size_15">47</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="cliquable">
              <button className="button" onClick={handleAddToBag}>Add to Bag</button>
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

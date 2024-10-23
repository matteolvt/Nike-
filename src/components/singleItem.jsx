/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useParams } from "react-router-dom"; // Importer useParams
import { useCart } from "./cartContext";
import "./css/singleItem.css";

const products = [
  {
    id: 1,
    category: "shoes",
    image:
      "/images/fecha-de-lanzamiento-de-las-air-max-plus-x-fc-barcelona-x-patta-culers-del-món-fn8260-001.jpg",
    name: "Air Max Plus Tn Patta FC Barcelona",
    description: "Men Shoes",
    price: 119.99,
  },
  {
    id: 2,
    category: "shoes",
    image: "/images/air-drift.jpg",
    name: "Nike Air Max Plus Drift",
    description: "Men Shoes",
    size: 42,
    width: "regular",
    activities: ["running"],
    color: "blue",
    model: "model b",
    price: 119.99,
  },
  {
    id: 3,
    category: "shoes",
    image: "/images/NIKE+AIR+PEGASUS+2005.png",
    name: "Nike Air Zoom Pegasus 2005",
    description: "Men Shoes",
    size: 41,
    width: "wide",
    activities: ["running"],
    color: "red",
    model: "model a",
    price: 139.99,
  },
  {
    id: 4,
    category: "shoes",
    image: "/images/NIKE+REACTX+INFINITY+RN+4+GTX.png",
    name: "Nike React Infinity Run",
    description: "Men Shoes",
    size: 40,
    width: "regular",
    activities: ["running"],
    color: "blue",
    model: "model b",
    price: 149.99,
  },
  {
    id: 5,
    category: "shoes",
    image: "/images/BLAZER+MID+'77+VNTG.png",
    name: "Nike Blazer Mid ‘77",
    description: "Men Shoes",
    size: 39,
    width: "wide",
    activities: ["running"],
    color: "red",
    model: "model b",
    price: 99.99,
  },
  {
    id: 6,
    category: "shoes",
    image: "/images/AIR+VAPORMAX+2023+FK.png",
    name: "Nike Air VaporMax",
    description: "Men Shoes",
    size: 38,
    width: "regular",
    activities: ["running"],
    color: "blue",
    model: "model a",
    price: 199.99,
  },


  {
    id: 7,
    category: "clothes",
    image: "/images/FCB+M+NK+DF+JSY+SS+STAD+HM.png",
    name: "FC Barcelona Stadium Home 2024/25",
    description: "Dri-FIT replica football jersey for men",
    price: 99.99,
  },
  {
    id: 8,
    category: "clothes",
    image: "/images/FCB+MNK+DF+STRK+SS+TOP+K.png",
    name: "FC Barcelona Strike",
    description: "Short Sleeve Mesh Football Top Nike Dri-FIT for men",
    colors: 1,
    price: 49.99,
  },
  {
    id: 9,
    category: "clothes",
    image: "/images/FCB+MNK+DF+ACDPR+SS+TOPK+HM+PM.png",
    name: "FC Barcelona Academy Pro Home",
    description: "Pre-Match Short Sleeve Football Top",
    colors: 1,
    price: 64.99,
  },
  {
    id: 10,
    category: "clothes",
    image: "/images/FCB+M+NSW+CLUB+CREW+FT+HM.png",
    name: "FC Barcelona Club Home",
    description: "Nike Football Men's Crewneck Sweatshirt",
    colors: 1,
    price: 64.99,
  },
  {
    id: 11,
    category: "clothes",
    image: "/images/FCB+M+NSW+CLUB+JGGR+FT+HM.png",
    name: "FC Barcelona Club local",
    description: "Nike Men's French Terry Football Joggers",
    colors: 1,
    price: 64.99,
  },
  {
    id: 12,
    category: "clothes",
    image: "/images/FCB+M+NSW+CLUB+HDY+FZ+FT+3R+GX.jpeg",
    name: "FC Barcelona Club Third",
    description: "Nike men's French Terry full-zip soccer beanie sweatshirt",
    colors: 1,
    price: 84.99,
  },

  {
    id: 13,
    category: "bags",
    image: "/images/229589-2001_1.jpg",
    name: "Backpack Barça crest",
    description: "Bags",
    price: 49.99,
  },
  {
    id: 14,
    category: "bags",
    image: "/images/229588-2001_1.jpg",
    name: "Shoe bag Barça crest",
    description: "Bags",
    colors: 1,
    price: 29.99,
  },
  {
    id: 15,
    category: "bags",
    image: "/images/BLMP000816004-1.jpg",
    name: "Backpack FC Barcelona Navy blue",
    description: "Bags",
    colors: 1,
    price: 79.99,
  },
  {
    id: 16,
    category: "bags",
    image: "/images/700x1060-DJ9968-410-1.webp",
    name: "Blue Barça Nike Backpack",
    description: "Bags",
    colors: 1,
    price: 29.99,
  },

  {
    id: 17,
    category: "bags",
    image: "/images/FCB+NK+GMSK+-+SU22.png",
    name: "Nike Barça black drawstring bag",
    description: "Backpack (33 L)",
    colors: 1,
    price: 22.99,
  },

  {
    id: 18,
    category: "bags",
    image: "/images/fcb_capsula_xmas_bossa_01_mid_res_21bac3e6-a22f-4efb-985a-aa84204bfe58.webp",
    name: "Gift bag",
    description: "Bags",
    colors: 1,
    price: 5.99,
  },

  {
    id: 19,
    category: "accessories",
    subCategory: "socks",
    image: "/images/FCB+U+NK+STRIKE+KH+HAa.jpeg",
    name: "FC Barcelona Strike Home",
    description: "High football socks",
    price: 17.99,
  },
  
  {
    id: 20,
    category: "accessories",
    subCategory: "socks",
    image: "/images/FCB+U+NK+STRIKE+KH+HA.png",
    name: "FC Barcelona Strike Home/Away",
    description: "Nike Dri-FIT High Football Socks",
    colors: 1,
    price: 19.99,
  },
  {
    id: 21,
    category: "accessories",
    subCategory: "hat",
    image: "/images/FCB+K+NK+DF+CLUB+CAP+US+CB+L.png",
    name: "FC Barcelone Dri-FIT Club",
    description: "Nike Football Soft Cap",
    colors: 2,
    price: 22.99,
  },
  {
    id: 22,
    category: "accessories",
    subCategory: "socks",
    image: "/images/FCB+U+NK+STRIKE+KH+3R.jpeg",
    name: "FC Barcelona 2024/25 Strike 3rd kit",
    description: "Nike Football High Socks",
    colors: 1,
    price: 19.99,
  },
  {
    id: 23,
    category: "accessories",
    subCategory: "hat",
    image: "/images/BLM3BFS_1.webp",
    name: "Reversible hat crest Barça",
    description: "Accesories",
    colors: 1,
    price: 34.99,
  },
  {
    id: 24,
    category: "accessories",
    subCategory: "hat",
    image: "/images/700x1060-BLM3GBLG-2.webp",
    name: "FC Barcelona cap with crest and anthem lyrics",
    description: "Accessories",
    colors: 1,
    price: 24.99,
  },

  {
    id: 25,
    category: "shoes",
    image: "/images/W+AIR+FORCE+1+'07+FLYEASE.png",
    name: "Nike Air Force 1 ‘07",
    description: "Women Shoes",
    colors: 3,
    price: 119.99,
  },
  {
    id: 26,
    category: "shoes",
    image: "/images/custom-nike-air-max-95-by-you.png",
    name: "Nike Air Max",
    description: "Women Shoes",
    colors: 2,
    price: 129.99,
  },
  {
    id: 27,
    category: "shoes",
    image: "/images/W+NIKE+AIR+PEGASUS+2005.png",
    name: "Nike Air Zoom Pegasus 2005",
    description: "Women Shoes",
    colors: 4,
    price: 139.99,
  },
  {
    id: 28,
    category: "shoes",
    image: "/images/NIKE+REACTX+INFINITY+RUN+4+W.png",
    name: "Nike React Infinity Run",
    description: "Women Shoes",
    colors: 3,
    price: 149.99,
  },
  {
    id: 29,
    category: "shoes",
    image: "/images/W+BLAZER+MID+'77.png",
    name: "Nike Blazer Mid ‘77",
    description: "Women Shoes",
    colors: 3,
    price: 99.99,
  },
  {
    id: 30,
    category: "shoes",
    image: "/images/W+AIR+VAPORMAX+2023+FK.png",
    name: "Nike Air VaporMax",
    description: "Women Shoes",
    colors: 2,
    price: 199.99,
  },

  {
    id: 31,
    category: "clothes",
    image: "/images/FCB+W+NK+DF+STAD+JSY+SS+HM.jpeg",
    name: "UCL Women's home jersey 24/25 FC Barcelona",
    description: "Women Clothing",
    colors: 1,
    price: 99.99,
  },
  {
    id: 32,
    category: "clothes",
    image: "/images/FCB+W+NK+TRAVEL+SS+TOP.png",
    name: "FC Barcelona Travel",
    description: "Women Clothing",
    colors: 1,
    price: 49.99,
  },
  {
    id: 33,
    category: "clothes",
    image: "/images/25100MCW_1_7f14d3e6-1ff2-4cfa-8abc-8f51bf3fe082.webp",
    name: "UCL Women's home jersey 24/25 FC Barcelona - Dri-Fit ADV",
    description: "Women Clothing",
    colors: 1,
    price: 149.99,
  },
  {
    id: 34,
    category: "clothes",
    image: "/images/FCB+W+NK+DF+STRK+SS+TOPK.png",
    name: "FC Barcelona Strike",
    description: "Nike Short Sleeve Mesh Football Top",
    colors: 1,
    price: 49.99,
  },
  {
    id: 35,
    category: "clothes",
    image: "/images/FCB+W+NK+DF+STRK+SHORT+KZ.png",
    name: "FC Barcelona Strike Elite",
    description: "Nike Dri-FIT ADV Women's Mesh Football Training Top",
    colors: 1,
    price: 129.99,
  },
  {
    id: 36,
    category: "clothes",
    image: "/images/FCB+W+NK+DFADV+STRK+EL+DRILT+K.png",
    name: "FC Barcelona Strike Elite",
    description: "Nike Dri-FIT ADV Knit Knit Training Football Shirt",
    colors: 1,
    price: 129.99,
  },

  {
    id: 37,
    category: "shoes",
    image: "/images/VOMERO+5+(GS).png",
    name: "Nike Vomero 5",
    description: "Kids Shoes",
    width: "wide",
    activities: ["running"],
    color: "red",
    model: "model a",
    price: 109.99,
  },
  {
    id: 38,
    category: "shoes",
    image: "/images/NIKE+DUNK+LOW+(GS).png",
    name: "Nike Dunk Low",
    description: "Kids Shoes",
    width: "regular",
    activities: ["running"],
    color: "blue",
    model: "model b",
    price: 99.99,
  },
  {
    id: 39,
    category: "shoes",
    image: "/images/AIR+JORDAN+1+RETRO+LOW+OG+(GS).png",
    name: "Air Jordan 1 Low OG (Mocha)",
    description: "Kids Shoes",
    width: "wide",
    activities: ["running"],
    color: "red",
    model: "model a",
    price: 119.99,
  },
  {
    id: 40,
    category: "shoes",
    image: "/images/JR+ZOOM+SUPERFLY+10+ACAD+FGMG.png",
    name: "Nike Jr. Mercurial Superfly 10 Academy",
    description: "Kids Shoes",
    width: "regular",
    activities: ["running"],
    color: "blue",
    model: "model b",
    price: 74.99,
  },
  {
    id: 41,
    category: "shoes",
    image: "/images/JR+ZM+VAPOR+16+PRO+FG.png",
    name: "Nike Jr. Mercurial Vapor 16 Pro",
    description: "Kids Shoes",
    width: "wide",
    activities: ["running"],
    color: "red",
    model: "model b",
    price: 139.99,
  },
  {
    id: 42,
    category: "shoes",
    image: "/images/JR+PHANTOM+GX+II+ACADEMY+FG_MG.png",
    name: "Nike Jr. Phantom GX 2 Academy",
    description: "Kids Shoes",
    width: "regular",
    activities: ["running"],
    color: "blue",
    model: "model a",
    price: 64.99,
  },

  {
    id: 43,
    category: "clothes",
    image: "/images/b1e72ee6_830e_41fd_8fe1_93f30b813f8e.webp",
    name: "FC Barcelona 2024/25 Stadium 3rd Kit",
    description: "Older Kids' Nike Dri-FIT Football Replica Shirt",
    colors: 1,
    price: 79.99,
  },
  {
    id: 44,
    category: "clothes",
    image: "/images/FCB+Y+NK+DF+SHORT+STAD+3R.png",
    name: "FC Barcelona 2024/25 Stadium 3rd Kit",
    description: "Replica Nike Dri-FIT Football Shorts - Boy / Girl",
    colors: 2,
    price: 39.99,
  },
  {
    id: 45,
    category: "clothes",
    image: "/images/FCB+LK+NK+DF+KIT+STAD+3R.png",
    name: "FC Barcelona 2024/25 Stadium 3rd Kit",
    description: "Nike Football Replica Three-Piece Kit - Toddler",
    colors: 1,
    price: 69.99,
  },
  {
    id: 46,
    category: "clothes",
    image: "/images/FCB+Y+NK+DF+JSY+SS+STAD+HM.jpeg",
    name: "FC Barcelona Strike 3rd Kit",
    description: "Nike Dri-FIT Replica Football Shirt - Boy / Girl",
    colors: 1,
    price: 79.99,
  },
  {
    id: 47,
    category: "clothes",
    image: "/images/FCB+YNK+DF+ACDPR+SS+TOP+K+AWPM.png",
    name: "FC Barcelona Academy Pro",
    description: "Nike Dri-FIT Youth Soccer Training Top",
    colors: 1,
    price: 59.99,
  },
  {
    id: 48,
    category: "clothes",
    image: "/images/FCB+YNK+DF+STRK+DRILL+TOP+K.jpeg",
    name: "FC Barcelona Strike Third",
    description: "Nike Dri-FIT Training Football Shirt - Boy/Girl",
    colors: 1,
    price: 39.99,
  },

  {
    id: 49,
    category: "accessories",
    subCategory: "socks",
    image: "/images/700x1060-73899-1.webp",
    name: "Home Kit socks – Junior",
    description: "Men Shoes",
    colors: 1,
    price: 13.99,
  },
  {
    id: 50,
    category: "accessories",
    subCategory: "socks",
    image: "/images/unnamed_9c556ba3-cb66-4766-be8a-95ef31f748d9.webp",
    name: "FC Barcelona Socks - Boys",
    description: "Men Shoes",
    colors: 1,
    price: 13.99,
  },
  {
    id: 51,
    category: "accessories",
    subCategory: "hat",
    image: "/images/FCB+K+NK+DF+CLUB+CAP+US+CB+LR.jpeg",
    name: "FC Barcelone Dri-FIT Club",
    description: "Nike Football Soft Cap for Teens",
    colors: 2,
    price: 22.99,
  },
  {
    id: 52,
    category: "accessories",
    subCategory: "hat",
    image: "/images/unnamed_f6098039-e0e0-42a4-b9e2-729d9c757740.webp",
    name: "FC Barcelona Academy",
    description: "Nike Therma-FIT Kids' Football Gloves",
    colors: 1,
    price: 24.99,
  },
];

const SingleItem = () => {
  const { id } = useParams(); // Récupérer l'ID du produit à partir de l'URL
  const { addToCart } = useCart();

  // Trouver le produit correspondant à l'ID
  const product = products.find((product) => product.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState("");

  const handleAddToBag = () => {
    if (!selectedSize && (product.category === "shoes" || product.subCategory === "socks" || product.category === "clothes")) {
      alert("Please select a size.");
      return;
    }

    const newItem = {
      name: product.name,
      price: product.price,
      size: selectedSize || "N/A",
      image: product.image,
      quantity: 1,
    };

    addToCart(newItem);
  };

  if (!product) {
    return <div>Product not found</div>; // Gérer le cas où l'ID est incorrect
  }

  // Options de tailles selon la catégorie du produit
  const renderSizeOptions = () => {
    if (product.category === "shoes") {
      // Pointures pour les chaussures
      return (
        <ul className="product_size">
          {["38", "39", "40", "40.5", "41", "41.5", "42", "42.5", "43", "43.5", "44", "44.5", "45", "46", "47"].map((size) => (
            <li key={size} className="size_1">
              <input
                type="radio"
                name="size"
                id={`size_${size}`}
                value={size}
                onChange={() => setSelectedSize(size)}
              />
              <label htmlFor={`size_${size}`}>{size}</label>
            </li>
          ))}
        </ul>
      );
    } else if (product.category === "clothes") {
      // Tailles de vêtements
      return (
        <ul className="product_size">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <li key={size} className="size_1">
              <input
                type="radio"
                name="size"
                id={`size_${size}`}
                value={size}
                onChange={() => setSelectedSize(size)}
              />
              <label htmlFor={`size_${size}`}>{size}</label>
            </li>
          ))}
        </ul>
      );
    } else if (product.category === "accessories" && product.subCategory === "socks") {
      // Pointures pour les chaussettes
      return (
        <ul className="product_size">
          {["38", "39", "40", "41", "42", "43", "44", "45"].map((size) => (
            <li key={size} className="size_1">
              <input
                type="radio"
                name="size"
                id={`size_${size}`}
                value={size}
                onChange={() => setSelectedSize(size)}
              />
              <label htmlFor={`size_${size}`}>{size}</label>
            </li>
          ))}
        </ul>
      );
    } 
    
    else if (product.category === "bags" || (product.category === "accessories" && product.subCategory === "hat")) {
      // Pas de taille pour les sacs et les chapeaux
      return null;
    } 

    return null;
  };

  return (
    <>
      <main>
        <div className="product-container">
          <div className="carousel-wrapper">
            <div className="carousel-container">
              <div className="carousel-inner">
                <div className="carousel-item">
                  <img src={product.image} alt={product.name} />
                </div>
              </div>
            </div>
          </div>

          <section className="product">
            <div className="infos">
              <h2>{product.name}</h2>
              <p className="description">{product.description}</p>
              <p className="price">{product.price}€</p>

              {/* Affichage des options de taille */}
              <div className="size-container">
                {renderSizeOptions()}
              </div>
            </div>

            <div className="cliquable">
              <button className="button" onClick={handleAddToBag}>
                Add to Bag
              </button>
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

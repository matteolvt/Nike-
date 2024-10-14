import "./css/productDetails.css"
import { useState, useEffect } from 'react'; 
const ProductDetails = () => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState('');
  
    // Fausse API pour charger les images
    useEffect(() => {
      const fetchedImages = Array.from({ length: 7 }, (_, i) => ({
        id: i,
        url: `https://via.placeholder.com/300?text=Image+${i + 1}`,
      }));
      setImages(fetchedImages);
      setSelectedImage(fetchedImages[0].url);
    }, []);
  
    const sizes = [
      'EU 38', 'EU 38.5', 'EU 39', 'EU 39.5', 'EU 40',
      'EU 40.5', 'EU 41', 'EU 41.5', 'EU 42', 'EU 42.5',
      'EU 43', 'EU 43.5', 'EU 44', 'EU 44.5', 'EU 45',
      'EU 45.5', 'EU 46', 'EU 47', 'EU 47.5',
    ];
  
    return (
      <div className="product-details">
        <div className="product-images">
          <div className="thumbnails">
            {images.map((image) => (
              <img
                key={image.id}
                src={image.url}
                alt={`Thumbnail ${image.id}`}
                onClick={() => setSelectedImage(image.url)}
                className={`thumbnail ${selectedImage === image.url ? 'selected' : ''}`}
              />
            ))}
          </div>
          <div className="main-image">
            <img src={selectedImage} alt="Selected" />
            <div className="navigation">
              <button>&lt;</button>
              <button>&gt;</button>
            </div>
          </div>
        </div>
        <div className="product-info">
          <h2>Nike Air Force 1</h2>
          <p>Shoes</p>
          <p>109,99 €</p>
          <div className="color-options">
            {images.slice(0, 5).map((image) => (
              <img key={image.id} src={image.url} alt="Color option" />
            ))}
          </div>
          <div className="size-options">
            <p>Select your size</p>
            <div className="sizes">
              {sizes.map((size, index) => (
                <button key={index} className="size-btn">
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="actions">
            <button className="add-to-bag">Add to Bag</button>
            <button className="wishlist">&hearts;</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductDetails;
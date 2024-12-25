import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="main-image-container">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="main-image" style={{ height: '350px', objectFit: 'cover', width: '100%'}} />
        <button className="carousel-button prev" onClick={handlePrevClick}>&lt;</button>
        <button className="carousel-button next" onClick={handleNextClick}>&gt;</button>
      </div>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
             style={{ height: '80px', objectFit: 'cover'}}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
import React, { useState } from 'react';

const ImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < 6; i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push(images[index]);
    }
    return visibleImages;
  };

  return (
    <div className="position-relative">
      <div 
        className="d-flex overflow-hidden rounded"
        style={{ height: '300px' }}
      >
        {getVisibleImages().map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{
              width: '16.666%',
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
      
      <button
        className="btn btn-warning position-absolute top-50 start-0 translate-middle-y ms-2"
        onClick={prevImage}
        style={{ zIndex: 10 }}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      
      <button
        className="btn btn-warning position-absolute top-50 end-0 translate-middle-y me-2"
        onClick={nextImage}
        style={{ zIndex: 10 }}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default ImageCarousel;
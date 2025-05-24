import React, { useState } from 'react';
import './projects.scss';

const ImageModal = ({ isOpen, onClose, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-image-container">
          <button className="modal-arrow left" onClick={goToPrevious}>❮</button>
          <img src={images[currentIndex]} alt={`Preview ${currentIndex + 1}`} />
          <button className="modal-arrow right" onClick={goToNext}>❯</button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal; 
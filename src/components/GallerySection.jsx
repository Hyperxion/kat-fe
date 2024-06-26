import React, { useState } from 'react';
import { ImageModal } from './ImageModal';

export function GallerySection({ images, currentIndex: index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(index);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <table className='center' >
      <tr>
        <td>
          <input type="image" className="image-btn" src="/left_arrow.png" onClick={previousImage} />
        </td>
        <td>
          <div className="image-wrapper">
            <img src={images[currentIndex]} className="image" alt={`Image ${index + 1}`} onClick={openModal} />
            <ImageModal isOpen={isModalOpen} closeModal={closeModal} images={images} index={index} />
          </div>
        </td>
        <td>
          <input type="image" className="image-btn" src="/right_arrow.png" onClick={nextImage} />
        </td>
      </tr>
    </table>
  );
}

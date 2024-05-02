import React, { useState } from 'react';
import { ImageModal } from './ImageModal';

export function GallerySection({images, currentIndex}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="content-wrapper">
        <img src={images[currentIndex]} className="intro-image" alt={`Image ${currentIndex + 1}`} onClick={openModal} />
      <ImageModal isOpen={isModalOpen} closeModal={closeModal} imageSrc={images[currentIndex]} />

    </div>
  );
}

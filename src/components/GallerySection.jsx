import React, { useState, useEffect } from 'react';

const images = [
  '../assets/img1.jpg',
  '../assets/img2.png',
  // Add more image URLs as needed
];

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const openModal = (index) => {
    // Open the gallery modal with the clicked image
    // Pass the index of the clicked image to the modal
  };

  return (
    <div className="gallery-section">
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        onClick={() => openModal(currentIndex)}
      />
    </div>
  );
}

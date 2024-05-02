import React, { useState, useEffect } from 'react';

const images = [];

for (let i = 1; i < 12; i++) {
  images.push(`/gallery/img${i}.png`);
}

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
    <div className="content-wrapper">
    <div className="intro-image">
      <img src={images[2]} alt={`Image ${currentIndex + 1}`} />
    </div>
    </div>
  );
}

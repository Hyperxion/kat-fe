import React, { useState, useEffect } from 'react';

const images = [];

for (let i = 1; i < 12; i++) {
  images.push(`/gallery/img${i}.png`);
}

console.log(`-----> images is: ${JSON.stringify(images, null, 2)}`);

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
    <div className="gallery-image">
      <img src={images[3]} alt={`Image ${currentIndex + 1}`} />
    </div>
  );
}

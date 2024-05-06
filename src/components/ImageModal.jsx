// ImageModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'black',
  },
};

Modal.setAppElement('#root'); // Set the app root element

export function ImageModal({ isOpen, closeModal, images, index }) {
  const [currentIndex, setCurrentIndex] = useState(index);

  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <table className="center">
        <tr>
          <td>
            <input type="image" className="image-btn" src="/left_arrow.png" onClick={previousImage} />
          </td>
          <td>
            <div>
              <img src={images[currentIndex]} alt="Enlarged Image" />
            </div>
          </td>
          <td>
            <input type="image" className="image-btn" src="/right_arrow.png" onClick={nextImage} />
          </td>
        </tr>
      </table>
    </Modal>
  );
}

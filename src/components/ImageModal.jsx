// ImageModal.js
import React, { useState }  from 'react';
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
      <div className='image-container'>
        <input type="image" className="image-btn" src="/left_arrow.png" onClick={previousImage}/>
        {/* <button style={{background: url(left_arrow.png)}}>Previous</button> */}
        <img src={images[currentIndex]} alt="Enlarged Image" />
        {/* <button>Next</button> */}
        <input type="image" className="image-btn" src="/right_arrow.png" onClick={nextImage}/>
      </div>
    </Modal>
  );
}

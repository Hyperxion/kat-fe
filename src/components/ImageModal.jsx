// ImageModal.js
import React from 'react';
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

export function ImageModal({ isOpen, closeModal, imageSrc }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <div>
        <input type="image" className="image-btn" src="/left_arrow.png" />
        {/* <button style={{background: url(left_arrow.png)}}>Previous</button> */}
        <img src={imageSrc} alt="Enlarged Image" />
        {/* <button>Next</button> */}
        <input type="image" className="image-btn" src="/right_arrow.png" />
      </div>
    </Modal>
  );
}

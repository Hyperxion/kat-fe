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
      <img src={imageSrc} alt="Enlarged Image" />
    </Modal>
  );
}

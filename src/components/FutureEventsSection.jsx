// FutureEventSection.jsx
import React, { useState } from 'react';
import { EditEventModal } from './EditEventModal.jsx';

export function FutureEventsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("Modal opened");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to load date and time from text file
  const loadDateTime = () => {
    // Implement logic to load date and time from text file
    return 'April 30, 2024 12:00 PM'; // Example date and time
  };
  console.log("isModalOpen:", isModalOpen);
  return (
    <div className="future-event-section">
      <h1>Najblizsia akcia </h1>
      <p className="intro-text">
Date and Time: {loadDateTime()}</p>
      <button onClick={openModal}>Edit</button>
      {isModalOpen && <EditEventModal closeModal={closeModal} />}
    </div>
  );
}

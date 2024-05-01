// FutureEventSection.jsx
import React, { useState } from 'react';
import { EditEventModal } from './EditEventModal.jsx';

export function FutureEventsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log('Modal opened');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to load date and time from text file
  const loadDateTime = () => {
    // Implement logic to load date and time from text file
    return `30.4.2024 7:30 Utorok`; // Example date and time
  };
  console.log('isModalOpen:', isModalOpen);

  return (
    <div className="future-event-section">
      <h1>Nasledujúca akcia </h1>      
      <button className="event-btn" onClick={openModal}>{loadDateTime()}<br />Ihrisko Opátske</button>      
    </div>
  );
}

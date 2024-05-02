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
    <div className="future-event-section" id='future-event-section'>            
      {/* <button className="event-btn">{loadDateTime()}<br />Ihrisko Opátske</button> */}
      <p className='event-date'>
      {loadDateTime()}<br />Ihrisko Opátske
      </p>
      {/* 
      // We will use this modal when saving into DB via separate backend, because we cannot write to a file from FE
      <EditEventModal isOpen={isModalOpen} closeModal={closeModal}/>
             */}
    </div>
  );
}

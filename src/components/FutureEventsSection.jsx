import React, { useState } from 'react';

export function FutureEventsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const loadDateTime = () => {
    // Implement logic to load date and time from text file
    return `30.4.2024 7:30 Utorok`;
  };


  return (
    <div className="centered-text" >            
      <p className='event-date'>
      {loadDateTime()}<br />Ihrisko Opátske
      </p>
    </div>
  );
}

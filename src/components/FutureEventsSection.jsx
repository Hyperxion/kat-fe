import React, { useState } from 'react';
import * as moment from 'moment';

export function FutureEventsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let currSundayDate = new Date('May 12 2024 7:30');
  let nextSunday = new Date();

  const loadDateTime = () => {
    const  options = { month: 'numeric', day: 'numeric' };
    nextSunday.setDate(currSundayDate.getDate() + 7);

    if (new Date() >= nextSunday) {
      currSundayDate = new Date();
    }

    console.log(`-----> currSundayDate is: ${JSON.stringify(currSundayDate, null, 2)}`);
    console.log(`-----> nextSunday is: ${JSON.stringify(new Date(nextSunday), null, 2)}`);
    
    return `${nextSunday.toLocaleDateString('sk-SK', options)} 7:30`;
  };


  return (
    <div className="centered-text" >            
      <p className='event-date'>
      {loadDateTime()}<br />Ihrisko Opátske
      </p>
    </div>
  );
}

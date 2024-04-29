import React, { useState } from 'react';
import { verifyPassword } from '../util/passwordVerification';

export function EditEventModal({ closeModal }) {
  const [date, setDate] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle saving the new date
  const saveDate = () => {
    // Implement logic to save the new date
    // Check if password is correct
    if (verifyPassword(password)) {
      // Save the new date
      console.log('Date saved:', date);
      closeModal(); // Close the modal
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="modal">
      <h2>Edit Event</h2>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={saveDate}>Save</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

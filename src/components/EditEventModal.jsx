// EditEventModal.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
import { verifyPassword } from '../util/passwordVerification';

Modal.setAppElement('#root'); // Set the root element for accessibility

export function EditEventModal({ isOpen, closeModal }) {
  const [date, setDate] = useState(new Date());
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
      setError('Nesprávne heslo!');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <h2>Edit Event</h2>
      <DatePicker
        selected={date}
        onChange={setDate}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={saveDate}>Save</button>
      {error && <p className="error">{error}</p>}
    </Modal>
  );
}

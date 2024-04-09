// ButtonGroup.js
import React from 'react';
import './SubmitButtonGroup.css'; // Ensure you have the corresponding CSS file for styling

const ButtonGroup = ({ onAction }) => {
  return (
    <div className="button-group">
      <button onClick={() => onAction('skip')} className="skip-button">Skip</button>
      <button onClick={() => onAction('submit')} className="submit-button">Submit</button>
    </div>
  );
};

export default ButtonGroup;

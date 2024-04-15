import React, { useState } from 'react';
import './genderButtonGroup.css'; // Ensure the path matches your file structure

const GenderSelection = ({ onSelect }) => {
  // State to hold the selected gender value
  const [value, setValue] = useState('');

  // Handler to update the selected gender and call the onSelect prop
  const handleSelect = (gender) => {
    setValue(gender); // Update the local state
    onSelect(gender); // Propagate the selection to the parent component
  };

  return (
    <div className="gender-selection-container">
      <div className="gender-value-display">
        Biological Sex: {value}
      </div>
      <div className="answer-button-group">
        <button
          className="gender-button female-option"
          onClick={() => handleSelect('female')}
        >
          Female
        </button>
        <button
          className="gender-button male-option"
          onClick={() => handleSelect('male')}
        >
          Male
        </button>
      </div>
    </div>
  );
};

export default GenderSelection;

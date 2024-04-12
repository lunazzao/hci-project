import React from 'react';
import './genderButtonGroup.css'; // Ensure the path matches your file structure

const GenderSelection = ({ onSelect }) => {
  return (
    <div className="answer-button-group">
      <button
        className="gender-button female-option"
        onClick={() => onSelect('female')}
      >
        Female
      </button>
      <button
        className="gender-button male-option"
        onClick={() => onSelect('male')}
      >
        Male
      </button>
    </div>
  );
};

export default GenderSelection;

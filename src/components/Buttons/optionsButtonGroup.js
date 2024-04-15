// OptionsButtonGroup.js
import React, { useState } from 'react';
import './optionsButtonGroup.css';

const OptionsButtonGroup = ({ options, onSelectionChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (optionId) => {
    setSelectedOptions(prevSelected => {
      // Calculate the new state first
      const newSelected = prevSelected.includes(optionId)
        ? prevSelected.filter(id => id !== optionId)
        : [...prevSelected, optionId];
      
      // Call the callback with the new state
      onSelectionChange(newSelected);
      return newSelected; // Return the new state to update
    });
  };

  return (
    <div className="options-button-group">
      {options.map(option => (
        <div key={option.id} className="option-button">
          <input
            type="checkbox"
            id={option.id}
            checked={selectedOptions.includes(option.id)}
            onChange={() => handleOptionChange(option.id)}
          />
          <label htmlFor={option.id}>{option.text}</label>
        </div>
      ))}
    </div>
  );
};

export default OptionsButtonGroup;

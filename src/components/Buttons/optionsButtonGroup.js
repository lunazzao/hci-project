import React, { useState } from 'react';
import './optionsButtonGroup.css'; // Make sure this path matches the location of your CSS file

const OptionsButtonGroup = ({ options, onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (optionId) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(optionId)
        ? prevSelected.filter((id) => id !== optionId)
        : [...prevSelected, optionId]
    );
  };

  return (
    <div className="options-button-group">
      {options.map((option) => (
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

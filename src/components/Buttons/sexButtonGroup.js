import React, { useState } from "react";
import "./sexButtonGroup.css"; // Ensure the path matches your file structure

const SexSelection = ({ onSelect }) => {
  // State to hold the selected sex value
  const [value, setValue] = useState("");

  // Handler to update the selected sex and call the onSelect prop
  const handleSelect = (sex) => {
    setValue(sex); // Update the local state
    onSelect(sex); // Propagate the selection to the parent component
  };

  return (
    <div className="sex-selection-container">
      <div className="sex-value-display">Biological Sex: {value}</div>
      <div className="answer-button-group">
        <button
          className="sex-button female-option"
          onClick={() => handleSelect("female")}
        >
          Female
        </button>
        <button
          className="sex-button male-option"
          onClick={() => handleSelect("male")}
        >
          Male
        </button>
      </div>
    </div>
  );
};

export default SexSelection;

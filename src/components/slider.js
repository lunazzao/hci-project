import React, { useState } from 'react';
import './Slider.css'; // Make sure to create this file and path is correct

// Slider component
// Slider component
const Slider = ({ min, max, step, onChange }) => {
  const [value, setValue] = useState((min + max) / 2);

  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue); // Pass the new value back to the parent component
  };

  return (
    <div className="slider-container">
      <div className="slider-value-display">Your Age: {value}</div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSliderChange}
        className="slider"
      />
      <div className="slider-label">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};


// Example parent component that uses the Slider
const SliderParent = () => {
  const handleSliderValueChange = (sliderValue) => {
    console.log('Selected Value:', sliderValue);
    // Now you can do something with the selected value in the parent component
  };

  return (
    <div>
      <Slider min={60} max={90} step={1} onChange={handleSliderValueChange} />
      {/* Buttons or other components can go here */}
    </div>
  );
};

export default SliderParent;

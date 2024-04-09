// App.js
import React, { useState } from 'react';
import './App.css';
import ChatGPT from './components/OpenAI/chatGPT';
import Sidebar from './components/sidebar/sidebar';
import AboutUs from './components/aboutUs'; 
import SilverBotComponent from './components/chatBubble/SilverBotComponent'; 
import Featured from './components/featured';
import Slider from './components/slider'; // Adjust path as necessary
import ButtonGroup from './components/Buttons/buttonGroup';

function App() {
  // State to manage which component is shown, default is set to 'chat'
  const [activeComponent, setActiveComponent] = useState('chat');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showSlider, setShowSlider] = useState(false);


  // Function to change the active component
  const changeActiveComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  const handleButtonClick = () => {
    setCurrentMessageIndex(currentIndex => {
      // Determine if the slider should be shown based on the next message index.
      // For example, if you want to show the slider after the first message,
      // you check if the currentIndex (before increment) is 0.
      const shouldShowSlider = currentIndex === 0;
      if (shouldShowSlider) {
        setShowSlider(true);
      }
      // `currentIndex` is only accessible inside this function.
      console.log(`currentIndex: ${currentIndex}`);
      return currentIndex + 1;
    });
  };

  const handleDisplayNextComponent = () => {
    if (showSlider) {
      // If the slider is currently shown, hide it and move to the next message
      setShowSlider(false);
      // setCurrentMessageIndex(currentIndex => currentIndex + 1);
    } else {
      // If the slider is not shown, show it
      setShowSlider(true);
    }
  };

  // Render the component based on the activeComponent state
  const renderComponent = () => {
    switch (activeComponent) {
      case 'chat':
      return (
        <div>
          <ChatGPT />
          <SilverBotComponent 
            currentMessageIndex={currentMessageIndex} 
            onMessageDisplayed={handleDisplayNextComponent}
          />
          {currentMessageIndex === 1 && <Slider min={60} max={90} step={1} onChange={() => {}} />}
          {/* Move ButtonGroup rendering here if you want it directly after the Slider */}
        </div>
      );
      case 'about':
        return <div><AboutUs /></div>;
      case 'featured':
          return <Featured />;
      // Add more cases as needed for other components
      default:
        return <SilverBotComponent />;
    }
  };

  return (
    <div className="app">
      <Sidebar changeActiveComponent={changeActiveComponent} />
      <div className="main">
        {renderComponent()}
        {/* Ensure ButtonGroup is rendered outside the `renderComponent` call 
            to always show it after the messages and optionally the slider. */}
        <ButtonGroup onAction={handleButtonClick} />
      </div>
    </div>
    );
}

export default App;

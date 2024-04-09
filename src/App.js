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
            {showSlider && <Slider min={60} max={90} step={1} onChange={() => {}} />}
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
        {/* Assuming you want to show the slider and button group together */}
        <ButtonGroup onAction={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;

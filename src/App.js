// App.js
import React, { useState } from 'react';
import './App.css';
import ChatGPT from './components/OpenAI/chatGPT';
import Sidebar from './components/sidebar/sidebar';
import AboutUs from './components/aboutUs'; // Make sure you have created this component
import SilverBotComponent from './components/chatBubble/silverBotComponent'; // This should be the path to your SilverBotComponent
import Featured from './components/featured';

function App() {
  // State to manage which component is shown, default is set to 'chat'
  const [activeComponent, setActiveComponent] = useState('chat');

  // Function to change the active component
  const changeActiveComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  // Render the component based on the activeComponent state
  const renderComponent = () => {
    switch (activeComponent) {
      case 'chat':
        return <div><ChatGPT /><SilverBotComponent /></div>;
      case 'about':
        return <AboutUs />;
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
      </div>
    </div>
  );
}

export default App;

// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import ChatGPT from "./components/OpenAI/chatGPT";
import Sidebar from "./components/sidebar/sidebar";
import AboutUs from "./components/aboutUs";
import SilverBotComponent from "./components/chatBubble/chatBubble";
import Featured from "./components/featured";
import Slider from "./components/slider"; // Adjust path as necessary
import ButtonGroup from "./components/Buttons/submitButtonGroup";
import GenderSelection from "./components/Buttons/genderButtonGroup";
import OptionsButtonGroup from "./components/Buttons/optionsButtonGroup";

function App() {
  // State to manage which component is shown, default is set to 'chat'
  const [activeComponent, setActiveComponent] = useState("chat");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showSlider, setShowSlider] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isSidebarVisible, setSidebarVisible] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setSidebarVisible(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  // Function to change the active component
  const changeActiveComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  const handleButtonClick = () => {
    setCurrentMessageIndex((currentIndex) => {
      const shouldShowSlider = currentIndex === 0;
      if (shouldShowSlider) {
        setShowSlider(true);
      }
      // `currentIndex` is only accessible inside this function.
      console.log(`currentIndex: ${currentIndex}`);
      return currentIndex + 1;
    });
  };

  const genderSelectHandler = (selectedGender) => {
    console.log(`User selected gender: ${selectedGender}`);
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

  const handleOptionsSubmit = (selectedOptions) => {
    console.log("Selected options:", selectedOptions);
    // Handle the selected options (store them, move to the next question, etc.)
    setSelectedOptions(selectedOptions);
  };

  const renderOptionsButtonGroup = () => {
    const optionsBasedOnQuestion =
      getOptionsForCurrentQuestion(currentMessageIndex);
    console.log("current Message Index:", currentMessageIndex);
    return (
      <OptionsButtonGroup
        options={optionsBasedOnQuestion}
        onSelectionChange={handleOptionsSubmit}
      />
    );
  };

  const getOptionsForCurrentQuestion = (index) => {
    switch (index) {
      case 2: // Index for "How often do you get to move and stretch?"
        return [
          { id: "daily", text: "Daily" },
          { id: "few-times-week", text: "A Few Times a Week" },
          { id: "weekly", text: "Weekly" },
          { id: "monthly", text: "Monthly" },
          { id: "rarely", text: "Rarely" },
        ];
      case 3: // Index for impairments
        return [
          { id: "legs", text: "Mobility - Legs" },
          { id: "arms", text: "Mobility - Arms" },
          { id: "eye", text: "Vision" },
          { id: "hear", text: "Hearing" },
          { id: "others", text: "Oters" },
        ];
      case 4: // Index for "What are your wellness goals?"
        return [
          { id: "strength", text: "Improve Strength" },
          { id: "flexibility", text: "Enhance Flexibility" },
          { id: "balance", text: "Better Balance" },
          { id: "endurance", text: "Increase Endurance" },
          { id: "other-wellness", text: "Other Wellness Goals" },
        ];
      // Add more cases as necessary for other questions
      default:
        return [];
    }
  };

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);  // Toggle the sidebar visibility
  };

  // Render the component based on the activeComponent state
  const renderComponent = () => {
    switch (activeComponent) {
      case "chat":
        return (
          <div>
            <ChatGPT />
            <SilverBotComponent
              currentMessageIndex={currentMessageIndex}
              onMessageDisplayed={handleDisplayNextComponent}
            />
            {currentMessageIndex === 0 && (
              <GenderSelection onSelect={genderSelectHandler} />
            )}
            {currentMessageIndex === 1 && (
              <Slider min={60} max={90} step={1} onChange={() => {}} />
            )}
            {currentMessageIndex === 2 && renderOptionsButtonGroup()}
            {currentMessageIndex === 3 && renderOptionsButtonGroup()}
            {currentMessageIndex === 4 && renderOptionsButtonGroup()}
          </div>
        );
      case "about":
        return (
          <div>
            <AboutUs />
          </div>
        );
      case "featured":
        return <Featured />;
      // Add more cases as needed for other components
      default:
        return <SilverBotComponent />;
    }
  };

  return (
    <div className="app">
      <button onClick={toggleSidebar} className="sidebar-toggle">Menu</button>
      {isSidebarVisible && <Sidebar changeActiveComponent={changeActiveComponent} />}
      <div className="main">
        {renderComponent()}
        <ButtonGroup onAction={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;

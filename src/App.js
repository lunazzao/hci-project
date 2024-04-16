// App.js
import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import getVideoFromPrompt from "./components/OpenAI/chatGPT";
import Sidebar from "./components/sidebar/sidebar";
import AboutUs from "./components/aboutUs";
import SilverBotComponent from "./components/chatBubble/chatBubble";
import Featured from "./components/featured";
import Slider from "./components/slider"; // Adjust path as necessary
import ButtonGroup from "./components/Buttons/submitButtonGroup";
import SexSelection from "./components/Buttons/sexButtonGroup";
import OptionsButtonGroup from "./components/Buttons/optionsButtonGroup";

function App() {
  // State to manage which component is shown, default is set to 'chat'
  const [activeComponent, setActiveComponent] = useState("chat");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(1);
  const [showSlider, setShowSlider] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedSex, setSelectedSex] = useState("");
  const [selectedAge, setSelectedAge] = useState(75);
  const healthInfo = useRef([]);
  const [title, setTitle] = useState("");
  const [embed, setEmbed] = useState("");
  const [mobileEmbed, setMobileEmbed] = useState("");
  const [showButton, setShowButton] = useState(true);

  const [isSidebarVisible, setSidebarVisible] = useState(
    window.innerWidth > 768
  );

  useEffect(() => {
    const handleResize = () => {
      setSidebarVisible(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to change the active component
  const changeActiveComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  const getAndDisplayVideo = async () => {
    let video = await getVideoFromPrompt(
      healthInfo.current[0] !== undefined
        ? `My sex is ${healthInfo.current[0]}. `
        : "" + healthInfo.current[1] !== undefined
        ? `My age is ${healthInfo.current[1]}. `
        : "" + healthInfo.current[2] !== undefined
        ? `I currently exercise ${healthInfo.current[2]}. `
        : "" + healthInfo.current[3] !== undefined
        ? `My physical limitations are ${healthInfo.current[3]}. `
        : "" + healthInfo.current[4] !== undefined
        ? `My wellness goals are to ${healthInfo.current[4]}. `
        : ""
    );
    setTitle(video.title);
    setEmbed(video.embedHtml);
    setMobileEmbed(video.mobileEmbedHtml);
    setCurrentMessageIndex(6);
  };

  const handleButtonClick = (buttonClicked) => {
    if (buttonClicked === "submit") {
      if (currentMessageIndex === 1) {
        healthInfo.current[0] = selectedSex;
      } else if (currentMessageIndex === 2) {
        healthInfo.current[1] = selectedAge;
      } else {
        healthInfo.current[currentMessageIndex - 1] =
          selectedOptions.join(", ");
      }
    }
    if (currentMessageIndex >= 5) {
      getAndDisplayVideo();
      setShowButton(false);
    }
    setCurrentMessageIndex((currentIndex) => {
      const shouldShowSlider = currentIndex === 0;
      if (shouldShowSlider) {
        setShowSlider(true);
      }
      return currentIndex + 1;
    });
  };

  const sexSelectHandler = (selectedSex) => {
    setSelectedSex(selectedSex);
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
    // Handle the selected options (store them, move to the next question, etc.)
    setSelectedOptions(selectedOptions);
  };

  const renderOptionsButtonGroup = () => {
    const optionsBasedOnQuestion = getOptionsForCurrentQuestion(
      currentMessageIndex - 1
    );
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
          { id: "vision", text: "Vision" },
          { id: "hearing", text: "Hearing" },
          { id: "others", text: "Others" },
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
    setSidebarVisible(!isSidebarVisible); // Toggle the sidebar visibility
  };

  // Render the component based on the activeComponent state
  const renderComponent = () => {
    switch (activeComponent) {
      case "chat":
        return (
          <div>
            <SilverBotComponent
              currentMessageIndex={currentMessageIndex}
              onMessageDisplayed={handleDisplayNextComponent}
            />
            {currentMessageIndex === 1 && (
              <SexSelection onSelect={sexSelectHandler} />
            )}
            {currentMessageIndex === 2 && (
              <Slider
                min={60}
                max={90}
                step={1}
                value={selectedAge}
                onChange={(value) => {
                  setSelectedAge(value);
                }}
              />
            )}
            {currentMessageIndex === 3 && renderOptionsButtonGroup()}
            {currentMessageIndex === 4 && renderOptionsButtonGroup()}
            {currentMessageIndex === 5 && renderOptionsButtonGroup()}
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
      <button onClick={toggleSidebar} className="sidebar-toggle">
        Menu
      </button>
      {isSidebarVisible && (
        <Sidebar changeActiveComponent={changeActiveComponent} />
      )}
      <div className="main">
        <div className="d-block d-lg-none" style={{ height: "50px" }}></div>
        {!isSidebarVisible ? (
          <div
            className="d-block d-lg-none"
            style={{
              height: "70px",
              width: "100vw",
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "#ecf0f1",
              zIndex: 10,
            }}
          ></div>
        ) : (
          <></>
        )}
        <h1 className="pb-3">
          <b>Silver Exercise Companion</b>
        </h1>
        {renderComponent()}
        {activeComponent === "chat" && showButton ? (
          <ButtonGroup onAction={handleButtonClick} />
        ) : (
          <></>
        )}
        {title.length > 0 && activeComponent === "chat" ? (
          <div>
            <div
              className="card py-2 m-3 video-card d-none d-lg-block mx-0 px-0"
              style={{ width: "801px", backgroundColor: "#FFF8E7" }}
            >
              <div
                className="card-img-top"
                dangerouslySetInnerHTML={{ __html: embed }}
              />
              <div className="card-body">
                <h3 className="card-title">{title}</h3>
              </div>
            </div>
            <div
              className="card py-2 m-3 video-card d-block d-lg-none"
              style={{ width: "351px", backgroundColor: "#FFF8E7" }}
            >
              <div
                className="card-img-top"
                dangerouslySetInnerHTML={{ __html: mobileEmbed }}
              />
              <div className="card-body">
                <h3 className="card-title">{title}</h3>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;

// App.js
import React from "react";
import "./App.css";
import ChatGPT from "./components/OpenAI/chatGPT";

function App() {
  // Render the component based on the activeComponent state
  const renderComponent = () => {
    return (
      <div>
        <ChatGPT />
      </div>
    );
  };

  return (
    <div className="app">
      <div className="main">{renderComponent()}</div>
    </div>
  );
}

export default App;

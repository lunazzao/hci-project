// App.js
import React from 'react';
import './App.css';
import ChatGPT from './components/OpenAI/chatGPT';
import Sidebar from './components/sidebar/sidebar';
import SilverBotAssistant from './components/chatBubble/silverBotComponent'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <ChatGPT />
        <SilverBotAssistant message="1. How old are you?" timestamp="11:45 AM" />
         {/* <Options /> */}
        {/* <BigPicture /> */}
       
      </div>
    </div>
  );
}

export default App;

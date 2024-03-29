// App.js
import React from 'react';
import './App.css';
import ChatGPT from './components/OpenAI/chatGPT';
import Sidebar from './components/sidebar/sidebar';
import SilverBotAssistant from './components/ChatBubble/silverBotComponent'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
         <SilverBotAssistant message="1. How old are you?" timestamp="11:45 AM" />
         <ChatGPT />
         {/* <Options /> */}
        {/* <BigPicture /> */}
       
      </div>
    </div>
  );
}

export default App;

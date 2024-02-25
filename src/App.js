// App.js
import BigPicture from './components/bigPicture';
import Profile from './components/profile';
import Recents from './components/recents';
import Options from './components/options';
import React from 'react';
import './App.css';
import ChatGPT from './components/OpenAI/chatGPT';

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <Profile />
        <Recents />
      </div>
      <div className="main">
        <ChatGPT />
        <Options />
        <BigPicture />
      </div>
    </div>
  );
}

export default App;

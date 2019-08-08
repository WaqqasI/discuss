import React from 'react';
import './main.css';
import {ChatArea} from "./subComponents/ChatArea";
import {Navigation} from "./subComponents/Navigation";


export const App = () => (
  <div className={'container'} style={{color: "#F9F871", backgroundColor: '#288AC4'}}>
    <ChatArea />
    <Navigation />
  </div>
);

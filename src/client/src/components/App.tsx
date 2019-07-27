import React from 'react';
import './main.css';
import {ChatArea} from "./subComponents/ChatArea";
import {Navigation} from "./subComponents/Navigation";


export const App = () => (
  <div className={'container'}>
    <ChatArea />
    <Navigation />
  </div>
);

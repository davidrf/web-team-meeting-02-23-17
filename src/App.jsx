import React from 'react';
import Countdown from './Countdown';
import Countup from './Countup';
import './App.css';

const App = () => (
  <div className="App">
    <Countdown target={4} />
    <Countup target={6} />
  </div>
);

export default App;

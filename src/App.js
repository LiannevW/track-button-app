import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';
import TestButton from './component/button'

const trackingId = "UA-";  // add tracking ID!
ReactGA.initialize(trackingId);

function App() {
  return (
    <div className="App">
      <h1>Hi there!</h1>
      <TestButton/>
    </div>
  );
}

export default App;

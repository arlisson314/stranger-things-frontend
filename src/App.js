import './App.css';
import React from 'react';
import StrangerThings from './components/StrangerThings';
import StrangerThingsDevelpoment from './components/StrangerThingsDevelopment';

require('dotenv').config();

function App() {
  return (
    <div className="App">
      <StrangerThingsDevelpoment />
      <StrangerThings />
    </div>
  );
}

export default App;

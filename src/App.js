import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';
// import StrangerThingsDevelpoment from './components/StrangerThingsDevelopment';
require('dotenv').config();

function App() {
  return (
    <div className="App">
      <StrangerThings />
    </div>
  );
}
export default App;

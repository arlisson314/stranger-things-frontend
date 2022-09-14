import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';
// import StrangerThingsDevelpoment from './components/StrangerThingsDevelopment';
require('dotenv').config();

function App() {
  const { REACT_APP_ENV } = process.env;
  return (
    <div className="App">
      {REACT_APP_ENV === 'development' && (
        <h1>Em desenvolvimento</h1>
      )}
      <StrangerThings />
    </div>
  );
}
export default App;

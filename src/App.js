import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';
import StrangerThingsDevelpoment from './components/StrangerThingsDevelopment';

function App() {
  return (
    <div className="App">
      <StrangerThingsDevelpoment />
      <StrangerThings />
    </div>
  );
}
export default App;

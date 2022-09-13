import React from 'react';
import StrangerThings from './components/StrangerThings';
// import StrangerThingsDevelpoment from './components/StrangerThingsDevelopment';

function App() {
  const { REACT_APP_DEVELOPMENT } = process.env;
  return (
    <div className="App">
      {REACT_APP_DEVELOPMENT === 'development' && (
        <h1>Em desenvolvimento</h1>
      )}
      <StrangerThings />
    </div>
  );
}

export default App;

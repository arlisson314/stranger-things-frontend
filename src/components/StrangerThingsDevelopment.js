import React from 'react';

require('dotenv').config();

function StrangerThingsDevelpoment() {
  const { REACT_APP_ENV } = process.env;
  return (
    <div>
      {REACT_APP_ENV === 'development' && (
        <h1>Em desenvolvimento</h1>
      )}
    </div>
  );
}

export default StrangerThingsDevelpoment;

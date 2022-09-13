import React from 'react';

require('dotenv').config();

function StrangerThingsDevelpoment() {
  const { REACT_APP_DEVELOPMENT } = process.env;
  return (
    <div>
      {REACT_APP_DEVELOPMENT === 'development' && (
        <h1>Em desenvolvimento</h1>
      )}
    </div>
  );
}

export default StrangerThingsDevelpoment;

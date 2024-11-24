import React, { useState } from 'react';

const ColorPicker = () => {

  const [color, setColor] = useState('#ffffff'); 

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div style={{ height: '100vh', backgroundColor: color }}>
      <h1 style={{ textAlign: 'center', paddingTop: '10px' }}>
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '300px' }}>
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          style={{ height: '50px', width: '50px' }}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
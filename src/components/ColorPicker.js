import React, { useState } from 'react';
import './styles.css';
function ColorPicker({ colors }) {
  const [isColorListVisible, setColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setColorListVisible(false);
  };

  return (
    <div className="color-picker">
          <h1>Color Picker </h1>
      {isColorListVisible && (
        <ul className="color-list">
          {colors.map((color, index) => (
            <li key={index} onClick={() => handleColorClick(color)} style={{ backgroundColor: color }}>
              {color === selectedColor ? 'Selected' : ''}
            </li>
          ))}
        </ul>
      )}
      <div className='btn'>
            <button onClick={handleButtonClick}  style={{ backgroundColor: selectedColor || 'initial' }}>Pick a color</button>
            </div>
      {selectedColor && <p>You've picked: {selectedColor}</p>}
    </div>
  );
}

export default ColorPicker;

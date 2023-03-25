import React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { ColorSlider } from './ColorSlider';

const App = () => {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);
  const [value, setValue] = useState(0);

  const handleValueChangeRed = (value) => {
    setRedValue(value);
  };

  const handleValueChangeBlue = (value) => {
    setBlueValue(value);
  };

  const handleValueChangeGreen = (value) => {
    setGreenValue(value);
  };

  const mystyle = () => {
    return redValue + greenValue + blueValue;
  };

  return (
    <div className="color-panel">
      <h1>Mixér barev</h1>
      <div className="sliders">
        <ColorSlider
          baseColor={redValue}
          colorName="Červená"
          onValueChange={handleValueChangeRed}
        />
        <ColorSlider
          baseColor={greenValue}
          colorName="Zelená"
          onValueChange={handleValueChangeGreen}
        />
        <ColorSlider
          baseColor={blueValue}
          colorName="Modrá"
          onValueChange={handleValueChangeBlue}
        />
      </div>
      <div
        className="color-box"
        id="color-box"
        style={{ backgroundColor: 'rgb(${ mystyle() })' }}
      ></div>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);

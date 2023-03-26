import React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { ColorSlider } from './ColorSlider';

const App = () => {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);

  const mystyle = {
    backgroundColor: 'rgb(${redValue}, ${greenValue}, ${blueValue})',
  };

  const handleValueChangeRed = (value) => {
    setRedValue(value);
  };

  const handleValueChangeBlue = (value) => {
    setBlueValue(value);
  };

  const handleValueChangeGreen = (value) => {
    setGreenValue(value);
  };

  return (
    <div className="color-panel">
      <h1>Mixér barev</h1>
      <div className="sliders">
        <ColorSlider
          baseColor="red"
          colorName="Červená"
          onValueChange={handleValueChangeRed}
          value={redValue}
        />
        <ColorSlider
          baseColor="green"
          colorName="Zelená"
          onValueChange={handleValueChangeGreen}
          value={greenValue}
        />
        <ColorSlider
          baseColor="blue"
          colorName="Modrá"
          onValueChange={handleValueChangeBlue}
          value={blueValue}
        />
      </div>
      <div className="color-box" id="color-box" style={mystyle}></div>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);

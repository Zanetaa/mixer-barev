import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { ColorSlider } from './ColorSlider';

const App = () => {
  const redSlider = document.getElementById('redSlider');
  const greenSlider = document.getElementById('greenSlider');
  const blueSlider = document.getElementById('blueSlider');
  const colorBox = document.getElementById('color-box');

  const changeColor = () => {
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;
    const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorBox.style.backgroundColor = color;
  };

  redSlider.addEventListener('input', changeColor);
  greenSlider.addEventListener('input', changeColor);
  blueSlider.addEventListener('input', changeColor);

  return (
    <div class="color-panel">
      <h1>Mixér barev</h1>
      <div class="sliders">
        <ColorSlider baseColor="red" colorName="Červená" />
        <ColorSlider baseColor="green" colorName="Zelená" />
        <ColorSlider baseColor="blue" colorName="Modrá" />
      </div>
      <div class="color-box" id="color-box"></div>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);

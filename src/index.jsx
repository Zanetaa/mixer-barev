import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

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
};

createRoot(document.querySelector('#app')).render(<App />);

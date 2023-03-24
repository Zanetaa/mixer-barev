import React from 'react';
import './style.css';

export const ColorSlider = ({ baseColor, colorName }) => {
  return (
    <div class="sliders">
      <label for="red">Červená</label>
      <input
        type="range"
        class="slider slider--red"
        id="redSlider"
        min="0"
        max="255"
        value="0"
      />
    </div>
  );
};

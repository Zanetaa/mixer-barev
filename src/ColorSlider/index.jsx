import React from 'react';
import './style.css';

export const ColorSlider = ({ baseColor, colorName }) => {
  return (
    <>
      <label for={baseColor}>{colorName}</label>
      <input
        type="range"
        class="slider slider--red"
        id="redSlider"
        min="0"
        max="255"
        value="0"
      />
    </>
  );
};

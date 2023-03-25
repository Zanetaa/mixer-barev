import React from 'react';
import './style.css';

export const ColorSlider = ({ baseColor, colorName, onValueChange }) => {
  return (
    <>
      <label htmlFor={baseColor}>{colorName}</label>
      <input
        type="range"
        className="slider slider--red"
        id="redSlider"
        min="0"
        max="255"
        value="0"
        onChange={(event) => {
          onValueChange(event.target.value);
        }}
      />
    </>
  );
};

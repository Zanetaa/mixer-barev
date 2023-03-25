import React from 'react';
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

  return (
    <div class="color-panel">
      <h1>Mixér barev</h1>
      <div class="sliders">
        <ColorSlider baseColor="red" colorName="Červená" />
        <ColorSlider baseColor="green" colorName="Zelená" />
        <ColorSlider baseColor="blue" colorName="Modrá" />
      </div>
      <div class="color-box" id="color-box" style={mystyle}></div>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);

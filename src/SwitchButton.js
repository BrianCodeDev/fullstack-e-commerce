// src/SwitchButton.js

import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const SwitchButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
      <div className="switch-handle">
        <FontAwesomeIcon icon={isOn ? faSun : faMoon} className="icon" />
      </div>
    </div>
  );
};

export default SwitchButton;

// src/components/ToggleButton.js

import React, { useState } from 'react';

function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      className={`flex items-center cursor-pointer w-12 h-6 rounded-full p-1 ${
        isToggled ? 'bg-blue-600' : 'bg-gray-300'
      }`}
      onClick={toggle}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform ${
          isToggled ? 'translate-x-6' : 'translate-x-0'
        } transition-transform duration-300`}
      ></div>
    </div>
  );
}

export default ToggleButton;

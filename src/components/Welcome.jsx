import React, { useState } from "react";
import Data from "./Data";
import 'animate.css';

const Welcome = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setShowComponent(true);
  };

  const scale = isHovered ? 0.9 : 1;

  const buttonStyle = {
    transform: `scale(${scale})`,
    transition: "transform 1s ease",
  };

  return (
    <div>
      {showComponent ? (
        <Data />
      ) : (
        <button
          className="button animate__animated animate__bounce"
          style={buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default Welcome;

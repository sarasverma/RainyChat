import React from "react";
import ReactRain from "react-rain-animation";
import "react-rain-animation/lib/style.css";
import "./Rain.scss";

const RainEffect = () => {
  return (
    <div className="rainEffect">
      <ReactRain numDrops="100" />
    </div>
  );
};

export default RainEffect;

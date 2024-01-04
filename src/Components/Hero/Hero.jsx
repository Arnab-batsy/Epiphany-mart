import React from "react";
import "./hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only!</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Trendy</p>
            <img src={hand_icon} alt="hand-icon" />
          </div>
          <p>Collections</p>
          <p>for Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest collections</div>
          <img src={arrow_icon} alt="arrow-icon" />
        </div>
      </div>
      <div className="hero-right">
      <img src={hero_image} alt="hero-image" />
      </div>
    </div>
  );
}

export default Hero;

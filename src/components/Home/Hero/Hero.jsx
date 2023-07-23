import React from "react";
import "./Hero.css";
import HomeButton from "../HomeButton/HomeButton";

function Hero() {
  return (
    <div className="hero-container">
      {/* Video Background */}
      <video src="/videos/eating.mp4" autoPlay loop muted />

      <h1>PRODUCTIVITY REIMAGINED</h1>
      <p>Empower yourself today!</p>
      <div className="hero-btns">
        <HomeButton
          buttonStyle="home-btn-outline"
          buttonSize="home-btn-large"
          link="/login"
        >
          GET STARTED
        </HomeButton>
        <HomeButton buttonStyle="home-btn-primary" buttonSize="home-btn-large">
          Watch Trailer <i className="far fa-play-circle" />
        </HomeButton>
      </div>
    </div>
  );
}

export default Hero;

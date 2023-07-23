import React from "react";
import "./HeroCards.css";
import HeroCard from "./HeroCard";

function HeroCards() {
  return (
    <div className="hero-cards-section">
      <h1>Find out more about our AMAZING tools!</h1>
      <div className="hero-cards-container">
        <div className="hero-cards-wrapper">
          <ul className="hero-cards">
            <HeroCard
              src="images/task-manager.png"
              text="Take Charge with our Task Manager"
              label="Productivity"
              path="/about"
            />
            <HeroCard
              src="images/pomodoro-timer.webp"
              text="Track your Efforts with our Pomodoro Timer"
              label="Productivity"
              path="/about"
            />
          </ul>
          <ul className="hero-cards">
            <HeroCard
              src="images/community.jpeg"
              text="Make Friends and Find Support"
              label="Community"
              path="/about"
            />
            <HeroCard
              src="images/cats.jpeg"
              text="Find out More about Cats"
              label="Information"
              path="/about"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeroCards;

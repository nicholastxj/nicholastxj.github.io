import React from "react";
import "./DashCards.css";
import DashCard from "../DashCard/DashCard";
import { DashCardsData } from "../../../data/data";

function DashCards() {
  return (
    <div className="dash-cards">
      {DashCardsData.map((card, id) => {
        return (
          <div className="parent-container">
            <DashCard
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
            />
          </div>
        );
      })}
    </div>
  );
}

export default DashCards;

import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./DashCard.css";

function DashCard(props) {
  return (
    <div
      className="dash-card"
      style={{
        background: props.color.background,
        boxShadow: props.color.boxShadow,
      }}
    >
      <div className="radial-bar">
        <CircularProgressbar
          value={props.barValue}
          text={`${props.barValue}%`}
        />
        <span>{props.title}</span>
      </div>
      <div className="detail">
        {props.png}
        <span>{props.value}</span>
        <span>Past Week</span>
      </div>
    </div>
  );
}

export default DashCard;

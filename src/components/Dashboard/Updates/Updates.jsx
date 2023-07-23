import React from "react";
import "./Updates.css";
import { UpdatesData } from "../../../data/data";

function Updates() {
  return (
    <div className="updates">
      {UpdatesData.map((update) => {
        return (
          <div className="update">
            <div className="update-image-wrapper">
              <img src={update.img} alt="alt" />
            </div>
            <div className="notif">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{update.name}</span>
                <span> {update.text}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Updates;

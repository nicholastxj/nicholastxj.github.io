import React from "react";
import "./DashInfo.css";
import Updates from "../Updates/Updates";
import Analytics from "../Analytics/Analytics";

function DashInfo() {
  return (
    <div className="dash-info">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Analytics</h3>
        <Analytics />
      </div>
    </div>
  );
}

export default DashInfo;

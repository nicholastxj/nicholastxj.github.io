import React from "react";
import "./DashMain.css";
import DashCards from "../DashCards/DashCards";
import Table from "../Table/Table";

function DashMain() {
  return (
    <div className="dash-main">
      <h1>Dashboard</h1>
      <DashCards />
      <Table />
    </div>
  );
}

export default DashMain;

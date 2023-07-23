import React from "react";
import "./Dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashMain from "../../components/Dashboard/DashMain/DashMain";
import DashInfo from "../../components/Dashboard/DashInfo/DashInfo";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-glass">
        <Sidebar />
        <DashMain />
        <DashInfo />
      </div>
    </div>
  );
}

export default Dashboard;

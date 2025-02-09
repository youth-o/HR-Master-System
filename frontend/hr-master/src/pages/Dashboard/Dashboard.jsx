import React from "react";
import "./Dashboard.css";
import EmployeeCard from "../../components/Dashboard/EmployeeCard";
import OnTimeCard from "../../components/Dashboard/OnTimeCard";
import LateArrivalCard from "../../components/Dashboard/LateArrivalCard";
import EarlyDepartureCard from "../../components/Dashboard/EarlyDepartureCard";
import RealtimeInsight from "../../components/Dashboard/RealtimeInsight";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <RealtimeInsight />
      <div className="employee-cards">
        <EmployeeCard />
        <OnTimeCard />
        <LateArrivalCard />
        <EarlyDepartureCard />
      </div>
    </div>
  );
};

export default Dashboard;

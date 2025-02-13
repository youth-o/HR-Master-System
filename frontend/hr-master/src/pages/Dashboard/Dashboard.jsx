import React from "react";
import "./Dashboard.css";
import RealtimeInsight from "../../components/Dashboard/RealtimeInsight";
import EmployeeCard from "../../components/Dashboard/EmployeeCard";
import OnTimeCard from "../../components/Dashboard/OnTimeCard";
import LateArrivalCard from "../../components/Dashboard/LateArrivalCard";
import AbsentCard from "../../components/Dashboard/AbsentCard";
import EarlyDepartureCard from "../../components/Dashboard/EarlyDepartureCard";
import TimeOffCard from "../../components/Dashboard/TimeOffCard";
import AttendanceChart from "../../components/Dashboard/AttendanceChart";
import WeeklyAttendanceChart from "../../components/Dashboard/WeeklyAttendanceChart";
import Header from "../../components/common/Header/Header";
import Nav from "../../components/common/Nav/Nav";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <Header />
      <div className="dashboard-container">
        <Nav />
        <div className="main-content">
          <RealtimeInsight />
          <div className="cards-container">
            <EmployeeCard />
            <OnTimeCard />
            <LateArrivalCard />
            <AbsentCard />
            <EarlyDepartureCard />
            <TimeOffCard />
          </div>
          <div className="bottom-section">
            <div className="attendance-chart">
              <AttendanceChart />
            </div>
            <div className="weekly-attendance">
              <WeeklyAttendanceChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

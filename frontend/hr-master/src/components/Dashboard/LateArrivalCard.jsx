import React from "react";
import "./LateArrivalCard.css";
import lateIcon from "../../assets/Dashboardimgs/Lateicon.svg";
import increaseIcon from "../../assets/Dashboardimgs/Increaseicon.svg";

const LateArrivalCard = () => {
  return (
    <div className="late-arrival-card">
      <div className="late-arrival-header">
        <span className="late-arrival-count">62</span>
        <img src={lateIcon} alt="Late Arrival Icon" className="late-arrival-icon" />
      </div>
      <h3 className="late-arrival-title">Late Arrival</h3>
      <div className="late-arrival-footer">
        <img src={increaseIcon} alt="Increase Icon" className="increase-icon" />
        <span className="late-arrival-percentage">+3% Increase than yesterday</span>
      </div>
    </div>
  );
};

export default LateArrivalCard;

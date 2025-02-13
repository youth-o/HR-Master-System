import React from "react";
import "./LateArrivalCard.css";
import lateIcon from "../../assets/Dashboardimgs/Lateicon.svg";
import increaseIcon from "../../assets/Dashboardimgs/Increaseicon.svg";

const LateArrivalCard = () => {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-left">
          <span className="card-number">62</span>
          <span className="card-title">Late Arrival</span>
        </div>
        <div className="card-icon">
          <img src={lateIcon} alt="Late Arrival Icon" />
        </div>
      </div>
    </div>
  );
};

export default LateArrivalCard;

import React from "react";
import "./EarlyDepartureCard.css";
import earlyIcon from "../../assets/Dashboardimgs/Earlyicon.svg";
import decreaseIcon from "../../assets/Dashboardimgs/Decreaseicon.svg";

const EarlyDepartureCard = () => {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-left">
          <span className="card-number">6</span>
          <span className="card-title">Early Departures</span>
          <span className="card-subtext">
            
          </span>
        </div>
        <div className="card-icon">
          <img src={earlyIcon} alt="Early Departures" />
        </div>
      </div>
    </div>
  );
};

export default EarlyDepartureCard;

import React from "react";
import "./EarlyDepartureCard.css";
import earlyIcon from "../../assets/Dashboardimgs/Earlyicon.svg";
import decreaseIcon from "../../assets/Dashboardimgs/Decreaseicon.svg";

const EarlyDepartureCard = () => {
  return (
    <div className="early-departure-card">
      <div className="early-departure-header">
        <span className="early-departure-title">6</span>
        <div className="early-departure-icon">
          <img src={earlyIcon} alt="Early Departures" />
        </div>
      </div>
      <div className="early-departure-title">Early Departures</div>
      <div className="early-departure-stats">
        <img src={decreaseIcon} alt="Decrease Icon" />
        <span>-10% Less than yesterday</span>
      </div>
    </div>
  );
};

export default EarlyDepartureCard;

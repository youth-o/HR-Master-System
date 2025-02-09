import React from "react";
import "./OnTimeCard.css";
import OntimeIcon from "../../assets/Dashboardimgs/Ontimeicon.svg";
import IncreaseIcon from "../../assets/Dashboardimgs/Increaseicon.svg";

const OnTimeCard = () => {
  return (
    <div className="on-time-card">
      <div className="on-time-header">
        <span className="on-time-number">360</span>
        <img src={OntimeIcon} alt="On Time Icon" className="on-time-icon" />
      </div>
      <div className="on-time-title">On Time</div>
      <div className="on-time-footer">
        <img src={IncreaseIcon} alt="Increase Icon" className="increase-icon" />
        <span className="on-time-status">-10% Less than yesterday</span>
      </div>
    </div>
  );
};

export default OnTimeCard;

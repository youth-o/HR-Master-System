import React from "react";
import "./OnTimeCard.css";
import OntimeIcon from "../../assets/Dashboardimgs/Ontimeicon.svg";
import IncreaseIcon from "../../assets/Dashboardimgs/Increaseicon.svg";

const OnTimeCard = () => {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-left">
          <span className="card-number">360</span>
          <span className="card-title">On Time</span>
        </div>
        <div className="card-icon">
          <img src={OntimeIcon} alt="On Time Icon" />
        </div>
      </div>
    </div>
  );
};

export default OnTimeCard;
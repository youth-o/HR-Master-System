import React from "react";
import "./TimeOffCard.css";
import timeOffIcon from "../../assets/Dashboardimgs/Timeofficon.svg";
import increaseIcon from "../../assets/Dashboardimgs/Increaseicon.svg"; // 증가 아이콘 추가

const TimeOffCard = () => {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-left">
          <span className="card-number">42</span>
          <span className="card-title">Time-off</span>
          <span className="card-subtext">
            <img src={increaseIcon} alt="Increase Icon" className="increase-icon" />
            2% Increase than yesterday
          </span>
        </div>
        <div className="card-icon">
          <img src={timeOffIcon} alt="Time-off Icon" />
        </div>
      </div>
    </div>
  );
};

export default TimeOffCard;

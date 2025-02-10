import React from "react";
import "./AbsentCard.css";
import absentIcon from "../../assets/Dashboardimgs/Absenticon.svg";
import increaseIcon from "../../assets/Dashboardimgs/Increaseicon.svg"; // 증가 아이콘 추가

const AbsentCard = () => {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-left">
          <span className="card-number">30</span>
          <span className="card-title">Absent</span>
        </div>
        <div className="card-icon">
          <img src={absentIcon} alt="Absent Icon" />
        </div>
      </div>
    </div>
  );
};

export default AbsentCard;
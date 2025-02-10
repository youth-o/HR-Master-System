import React from "react";
import "./EmployeeCard.css";
import employeesIcon from "../../assets/Dashboardimgs/TotalEmployees.svg";

const EmployeeCard = () => {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-left">
          <span className="card-number">452</span>
          <span className="card-title">Total Employees</span>
        </div>
        <div className="card-icon">
          <img src={employeesIcon} alt="Employees" />
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;

import React from "react";
import "./EmployeeCard.css"

import employeesIcon from "../../assets/Dashboardimgs/TotalEmployees.svg";

const EmployeesCard = () => {
  return (
    <div className="employees-card">
      <div className="employees-header">
        <span className="employees-number">452</span>
        <div className="employees-icon">
          <img src={employeesIcon} alt="Employees" />
        </div>
      </div>
      <span className="employees-text">Total Employees</span>
      <span className="employees-subtext">+ 2 new employees added!</span>
    </div>
  );
};

export default EmployeesCard;

import React, { useState } from 'react';
import './PerformanceTable.css';

const employees = [
    { id: 1, name: "Charlie Kristen", rating: 4.0, goal: "UX 디자인 개선", workHours: "12/02/23", department: "Sr. UX Designer", achievement: "90%", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 2, name: "Malaika Brown", rating: 3.5, goal: "프로젝트 기획", workHours: "18/02/23", department: "Sr. UX Designer", achievement: "90%", image: "https://randomuser.me/api/portraits/women/68.jpg" },
    { id: 3, name: "Simon Minter", rating: 2.8, goal: "제품 테스트", workHours: "04/01/23", department: "Sr. UX Designer", achievement: "90%", image: "https://randomuser.me/api/portraits/men/48.jpg" },
    { id: 4, name: "Nishant Talwar", rating: 5.0, goal: "팀 협업 강화", workHours: "24/12/22", department: "Sr. UX Designer", achievement: "90%", image: "https://randomuser.me/api/portraits/men/51.jpg" },
    { id: 5, name: "Mark Jacobs", rating: 2.0, goal: "시장 조사", workHours: "13/02/23", department: "Sr. UX Designer", achievement: "90%", image: "https://randomuser.me/api/portraits/men/60.jpg" },
    { id: 6, name: "Nishant Talwar", rating: 5.0, goal: "시장 조사", workHours: "24/12/22", department: "Sr. UX Designer", achievement: "90%", image: "https://randomuser.me/api/portraits/men/51.jpg" },
    { id: 7, name: "Mark Jacobs", rating: 2.0, goal: "시장 조사", workHours: "13/02/23", department: "Sr. UX Designer", achievement: "90%", image: "https://randomuser.me/api/portraits/men/60.jpg" },
];

const PerformanceTable = () => {
    const [filterStatus, setFilterStatus] = useState("All");

    return (
        <div className="performance-container">
            {/* 필터 탭 */}
            <div className="filter-tabs">
                <button className={filterStatus === "All" ? "active" : ""} onClick={() => setFilterStatus("All")}>All</button>
                <button className={filterStatus === "Accepted" ? "active" : ""} onClick={() => setFilterStatus("Accepted")}>Accepted</button>
                <button className={filterStatus === "Rejected" ? "active" : ""} onClick={() => setFilterStatus("Rejected")}>Rejected</button>
            </div>

            {/* 직원 테이블 */}
            <table className="performance-table">
                <thead>
                    <tr>
                        <th>직원명</th>
                        <th>평가점수</th>
                        <th>목표</th>
                        <th>총 근무 시간</th>
                        <th>부서명</th>
                        <th>달성률</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>
                                <div className="user-info">
                                    <img src={employee.image} alt={employee.name} />
                                    {employee.name}
                                </div>
                            </td>
                            <td>⭐ {employee.rating}</td>
                            <td>{employee.goal}</td>
                            <td>{employee.workHours}</td>
                            <td>{employee.department}</td>
                            <td>📎 {employee.achievement}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PerformanceTable;

import React, { useState } from 'react';
import './AnnualTable.css';

const employees = [
    { id: 1, name: "Charlie Kristen", totalLeave: "15일", usedLeave: "5일", approval: "승인 대기", requestDate: "12/02/23", remainingLeave: "📎 10일", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 2, name: "Malaika Brown", totalLeave: "15일", usedLeave: "5일", approval: "승인 대기", requestDate: "12/02/23", remainingLeave: "📎 10일", image: "https://randomuser.me/api/portraits/women/68.jpg" },
    { id: 3, name: "Simon Minter", totalLeave: "15일", usedLeave: "5일", approval: "승인 대기", requestDate: "12/02/23", remainingLeave: "📎 10일", image: "https://randomuser.me/api/portraits/men/48.jpg" },
    { id: 4, name: "Nishant Talwar", totalLeave: "15일", usedLeave: "5일", approval: "승인 대기", requestDate: "12/02/23", remainingLeave: "📎 10일", image: "https://randomuser.me/api/portraits/men/51.jpg" },
    { id: 5, name: "Mark Jacobs", totalLeave: "15일", usedLeave: "5일", approval: "승인됨", requestDate: "12/02/23", remainingLeave: "📎 10일", image: "https://randomuser.me/api/portraits/men/60.jpg" },
    { id: 6, name: "Nishant Talwar", totalLeave: "15일", usedLeave: "5일", approval: "승인됨", requestDate: "12/02/23", remainingLeave: "📎 10일", image: "https://randomuser.me/api/portraits/men/51.jpg" },
    { id: 7, name: "Mark Jacobs", totalLeave: "15일", usedLeave: "5일", approval: "거절됨", requestDate: "12/02/23", remainingLeave: "📎 10일", image: "https://randomuser.me/api/portraits/men/60.jpg" },
];

const AnnualTable = () => {
    const [filterStatus, setFilterStatus] = useState("All");

    return (
        <div className="annual-container">
            {/* 필터 버튼 */}
            <div className="filter-tabs">
                <button className={filterStatus === "All" ? "active" : ""} onClick={() => setFilterStatus("All")}>All</button>
                <button className={filterStatus === "Accepted" ? "active" : ""} onClick={() => setFilterStatus("Accepted")}>Accepted</button>
                <button className={filterStatus === "Rejected" ? "active" : ""} onClick={() => setFilterStatus("Rejected")}>Rejected</button>
            </div>

            {/* 연차 관리 테이블 */}
            <table className="annual-table">
                <thead>
                    <tr>
                        <th>직원명</th>
                        <th>총 연차</th>
                        <th>사용 연차</th>
                        <th>승인 여부</th>
                        <th>신청 날짜</th>
                        <th>잔여 연차</th>
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
                            <td>⭐ {employee.totalLeave}</td>
                            <td>{employee.usedLeave}</td>
                            <td>{employee.approval}</td>
                            <td>{employee.requestDate}</td>
                            <td>{employee.remainingLeave}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AnnualTable;

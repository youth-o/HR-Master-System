import React, { useState } from 'react';
import './AttendanceTable.css';

const employees = [
    { id: 1, name: "Charlie Kristen", checkIn: "09:00", checkOut: "17:40", totalHours: "9시간", department: "Sr. UX Designer", status: "📎 정상 출근", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 2, name: "Malaika Brown", checkIn: "09:00", checkOut: "17:40", totalHours: "9시간", department: "Sr. UX Designer", status: "📎 정상 출근", image: "https://randomuser.me/api/portraits/women/68.jpg" },
    { id: 3, name: "Simon Minter", checkIn: "09:00", checkOut: "17:40", totalHours: "9시간", department: "Sr. UX Designer", status: "📎 정상 출근", image: "https://randomuser.me/api/portraits/men/48.jpg" },
    { id: 4, name: "Nishant Talwar", checkIn: "09:00", checkOut: "17:40", totalHours: "9시간", department: "Sr. UX Designer", status: "📎 정상 출근", image: "https://randomuser.me/api/portraits/men/51.jpg" },
    { id: 5, name: "Mark Jacobs", checkIn: "09:00", checkOut: "17:40", totalHours: "9시간", department: "Sr. UX Designer", status: "📎 정상 출근", image: "https://randomuser.me/api/portraits/men/60.jpg" },
    { id: 6, name: "Nishant Talwar", checkIn: "09:00", checkOut: "17:40", totalHours: "9시간", department: "Sr. UX Designer", status: "📎 정상 출근", image: "https://randomuser.me/api/portraits/men/51.jpg" },
    { id: 7, name: "Mark Jacobs", checkIn: "09:00", checkOut: "17:40", totalHours: "9시간", department: "Sr. UX Designer", status: "📎 정상 출근", image: "https://randomuser.me/api/portraits/men/60.jpg" },
];

const AttendanceTable = () => {
    const [filterStatus, setFilterStatus] = useState("All");

    return (
        <div className="attendance-container">
            {/* 필터 버튼 */}
            <div className="filter-tabs">
                <button className={filterStatus === "All" ? "active" : ""} onClick={() => setFilterStatus("All")}>All</button>
                <button className={filterStatus === "Accepted" ? "active" : ""} onClick={() => setFilterStatus("Accepted")}>Accepted</button>
                <button className={filterStatus === "Rejected" ? "active" : ""} onClick={() => setFilterStatus("Rejected")}>Rejected</button>
            </div>

            {/* 근태 관리 테이블 */}
            <table className="attendance-table">
                <thead>
                    <tr>
                        <th>직원명</th>
                        <th>출근시간</th>
                        <th>퇴근시간</th>
                        <th>총 근무 시간</th>
                        <th>부서명</th>
                        <th>현재 근태 상태</th>
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
                            <td>⭐ {employee.checkIn}</td>
                            <td>{employee.checkOut}</td>
                            <td>{employee.totalHours}</td>
                            <td>{employee.department}</td>
                            <td>{employee.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceTable;

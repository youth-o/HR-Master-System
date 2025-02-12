import React, { useState } from 'react';
import './ApplicantsTable.css';

const applicants = [
    { id: 1, name: "Charlie Kristen", rating: 4.0, stage: "Design Challenge", role: "Sr. UX Designer", date: "12/02/23", attachments: "3 files", status: "Accepted", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 2, name: "Malaika Brown", rating: 3.5, stage: "Screening", role: "Sr. UX Designer", date: "18/02/23", attachments: "1 file", status: "Accepted", image: "https://randomuser.me/api/portraits/women/68.jpg" },
    { id: 3, name: "Simon Minter", rating: 2.8, stage: "Design Challenge", role: "Sr. UX Designer", date: "04/01/23", attachments: "2 files", status: "Rejected", image: "https://randomuser.me/api/portraits/men/48.jpg" },
    { id: 4, name: "Nishant Talwar", rating: 5.0, stage: "Round 2 Interview", role: "Sr. UX Designer", date: "24/12/22", attachments: "2 files", status: "Accepted", image: "https://randomuser.me/api/portraits/men/51.jpg" },
    { id: 5, name: "Mark Jacobs", rating: 2.0, stage: "Rejected", role: "Sr. UX Designer", date: "13/02/23", attachments: "1 file", status: "Rejected", image: "https://randomuser.me/api/portraits/men/60.jpg" },
    { id: 6, name: "Nishant Talwar", rating: 5.0, stage: "Round 2 Interview", role: "Sr. UX Designer", date: "24/12/22", attachments: "2 files", status: "Accepted", image: "https://randomuser.me/api/portraits/men/51.jpg" },
    { id: 7, name: "Mark Jacobs", rating: 2.0, stage: "Rejected", role: "Sr. UX Designer", date: "13/02/23", attachments: "1 file", status: "Rejected", image: "https://randomuser.me/api/portraits/men/60.jpg" },
];

const ApplicantsTable = () => {
    const [filterStatus, setFilterStatus] = useState("All");

    // 현재 필터 상태에 따라 지원자 필터링
    const filteredApplicants = applicants.filter(applicant => 
        filterStatus === "All" || applicant.status === filterStatus
    );

    return (
        <div className="applicants-container">
            {/* 필터 버튼 */}
            <div className="filter-tabs">
                <button 
                    className={filterStatus === "All" ? "active" : ""} 
                    onClick={() => setFilterStatus("All")}
                >
                    All
                </button>
                <button 
                    className={filterStatus === "Accepted" ? "active" : ""} 
                    onClick={() => setFilterStatus("Accepted")}
                >
                    Accepted
                </button>
                <button 
                    className={filterStatus === "Rejected" ? "active" : ""} 
                    onClick={() => setFilterStatus("Rejected")}
                >
                    Rejected
                </button>
            </div>

            {/* 지원자 테이블 */}
            <table className="applicants-table">
                <thead>
                    <tr>
                        <th>Candidate Name</th>
                        <th>Rating</th>
                        <th>Stages</th>
                        <th>Applied Role</th>
                        <th>Application Date</th>
                        <th>Attachments</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredApplicants.map((applicant) => (
                        <tr key={applicant.id}>
                            <td>
                                <div className="user-info">
                                    <img src={applicant.image} alt={applicant.name} />
                                    {applicant.name}
                                </div>
                            </td>
                            <td>⭐ {applicant.rating}</td>
                            <td>{applicant.stage}</td>
                            <td>{applicant.role}</td>
                            <td>{applicant.date}</td>
                            <td>📎 {applicant.attachments}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApplicantsTable;

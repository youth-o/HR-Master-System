import React, { useState } from 'react';
import Header from '../../components/common/Header/Header';
import Nav from '../../components/common/Nav/Nav';
import ApplicantsTable from '../../components/Table/ApplicantsTable/ApplicantsTable';
import './Volunteer.css';

const Volunteer = () => {
    const [selectedYear, setSelectedYear] = useState(2025);
    const [selectedMonth, setSelectedMonth] = useState('Jan');

    const years = [2023, 2024, 2025, 2026]; // 선택 가능한 연도 리스트
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]; // 선택 가능한 월 리스트

    return (
        <>
            <Header />
            <div className="layout">
                <Nav />
                <div className="content">
                    {/* 지원자 관리 타이틀 & 년/월 선택 */}
                    <div className="volunteer-container">
                        <h2 className="page-title">지원자 관리</h2>
                        <div className="date-picker">
                            <select 
                                className="month-select" 
                                value={selectedMonth} 
                                onChange={(e) => setSelectedMonth(e.target.value)}
                            >
                                {months.map((month) => (
                                    <option key={month} value={month}>{month}</option>
                                ))}
                            </select>
                            <select 
                                className="year-select" 
                                value={selectedYear} 
                                onChange={(e) => setSelectedYear(e.target.value)}
                            >
                                {years.map((year) => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <ApplicantsTable /> 
                </div>
            </div>
        </>
    );
};

export default Volunteer;

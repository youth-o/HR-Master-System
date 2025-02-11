import React from 'react';
import calendarIcon from '../../assets/PayManagementImgs/Calendaricon.svg';
import './UpcomingPay.css';

const UpcomingPay = () => {
    return (
        <div className="upcoming-pay">
            <div className="upcoming-text">
                <p className="upcoming-label">Upcoming</p>
                <p className="upcoming-date">Jan 1st, <span className="year">2025</span></p>
            </div>
            <div className="calendar-icon-wrapper">
                <img src={calendarIcon} alt="Calendar" className="calendar-icon" />
            </div>
        </div>
    );
};

export default UpcomingPay;

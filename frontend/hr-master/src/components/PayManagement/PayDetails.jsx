import React from 'react';
import kakaoBankicon from '../../assets/PayManagementImgs/kakoBankicon.png';
import chartIcon from '../../assets/PayManagementImgs/charticon.svg';
import './PayDetails.css';

const PayDetails = () => {
    return (
        <div className="pay-details">
            <div className="pay-header">
                <h3>전체 급여</h3>
                <img src={chartIcon} alt="Chart Icon" className="chart-icon" />
            </div>
            <h2>₩58,764.25</h2>
            <div className="bank-info">
                <img src={kakaoBankicon} alt="Bank" className="bank-icon" />
                <span className="bank-account">카카오뱅크 3333-1231-1223</span>
                <button className="pay-completed">지급 완료</button>
            </div>
        </div>
    );
};

export default PayDetails;

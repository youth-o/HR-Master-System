import React from 'react';
import Header from '../../components/common/Header/Header';
import Nav from '../../components/common/Nav/Nav';

import EmployeeInfo from '../../components/\bPayManagement/EmployeePayInfo';
import UpcomingPay from '../../components/\bPayManagement/UpcomingPay';
import PayDetails from '../../components/\bPayManagement/PayDetails';
import PayrollSummary from '../../components/\bPayManagement/PayrollSummary';

import './PayManagement.css';

const PayManagement = () => {
    return (
        <>
            <Header />
            <div className="pay-management-layout">
                <Nav />
                <div className="pay-management-content">
                    <EmployeeInfo />
                    <div className="pay-summary-section">
                        <UpcomingPay />
                        <PayDetails />
                    </div>
                    <PayrollSummary />
                </div>
            </div>
        </>
    );
};

export default PayManagement;

import React from 'react';
import Header from '../../components/common/Header/Header';
import Nav from '../../components/common/Nav/Nav';

import EmployeeInfo from '../../components/PayManagement/EmployeePayInfo';
import UpcomingPay from '../../components/PayManagement/UpcomingPay';
import PayDetails from '../../components/PayManagement/PayDetails';
import PayrollSummary from '../../components/PayManagement/PayrollSummary';

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

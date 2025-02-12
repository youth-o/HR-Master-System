import React from 'react';
import Header from '../../components/common/Header/Header';
import Nav from '../../components/common/Nav/Nav';
import EmployeeInfo from '../../components/PayManagement/EmployeePayInfo';
import PerformanceTable from '../../components/Table/PerformanceTable/PerformanceTable';

import './PerformanceManage.css';

const PayManagement = () => {
	return (
		<>
			<Header />
			<div className="layout">
				<Nav />
				<div className="content">
					<EmployeeInfo />
					<PerformanceTable />
				</div>
			</div>
		</>
	);
};

export default PayManagement;

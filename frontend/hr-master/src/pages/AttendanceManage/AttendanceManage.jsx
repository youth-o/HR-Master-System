import { useState } from 'react';
import Header from '../../components/common/Header/Header';
import Nav from '../../components/common/Nav/Nav';
import EmployeePayInfo from '../../components/PayManagement/EmployeePayInfo';
import AttendanceTable from '../../components/Table/AttendanceTable/AttendanceTable';

import './AttendanceManage.css';

const PayManagement = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearch = () => {
		setSearchQuery(searchTerm);
	};

	return (
		<>
			<Header />
			<div className="layout">
				<Nav />
				<div className="content">
					<EmployeePayInfo setSearchTerm={setSearchTerm} onSearch={handleSearch} />
					<AttendanceTable searchTerm={searchQuery} />
				</div>
			</div>
		</>
	);
};

export default PayManagement;

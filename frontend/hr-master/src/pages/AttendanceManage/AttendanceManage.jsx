import { useState } from 'react';
import Header from '../../components/common/Header/Header';
import Nav from '../../components/common/Nav/Nav';
import EmployeePayInfo from '../../components/PayManagement/EmployeePayInfo';
import AttendanceTable from '../../components/Table/AttendanceTable/AttendanceTable';

import './AttendanceManage.css';

const PayManagement = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedEmployee, setSelectedEmployee] = useState(null);

	const handleSearch = () => {
		setSearchQuery(searchTerm);
	};

	return (
		<>
			<Header />
			<div className="layout">
				<Nav />
				<div className="content">
					<EmployeePayInfo setSearchTerm={setSearchTerm} onSearch={handleSearch} employee={selectedEmployee} />
					<AttendanceTable searchTerm={searchQuery} setSelectedEmployee={setSelectedEmployee} />
				</div>
			</div>
		</>
	);
};

export default PayManagement;

import { useState } from 'react';
import Header from '../../components/common/Header/Header';
import Nav from '../../components/common/Nav/Nav';
import EmployeeInfo from '../../components/PayManagement/EmployeePayInfo';
import AnnualTable from '../../components/Table/AnnualTable/AnnualTable';

import './AnnualManage.css';

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
					<EmployeeInfo setSearchTerm={setSearchTerm} onSearch={handleSearch} />
					<AnnualTable searchTerm={searchQuery} />
				</div>
			</div>
		</>
	);
};

export default PayManagement;

import { useState } from 'react';
import Header from '../../components/common/Header/Header';
import Nav from '../../components/common/Nav/Nav';
import List from '../../components/EmployeesList/List/List';
import styles from './EmployeesList.module.css';
import EmployeePayInfo from '../../components/PayManagement/EmployeePayInfo';

export default function EmployeesList() {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearch = () => {
		setSearchQuery(searchTerm);
	};

	return (
		<>
			<Header />
			<div className={styles.layout}>
				<Nav />
				<div className={styles.employee}>
					<EmployeePayInfo setSearchTerm={setSearchTerm} onSearch={handleSearch} />
					<List searchTerm={searchQuery} />
				</div>
			</div>
		</>
	);
}

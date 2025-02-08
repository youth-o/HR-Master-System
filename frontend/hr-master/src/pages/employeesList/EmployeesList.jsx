import { useState } from 'react';
import Header from '../../components/common/Header/Header';
import Nav from '../../components/common/Nav/Nav';
import CurrentInfo from '../../components/EmployeesList/CurrentInfo/CurrentInfo';
import List from '../../components/EmployeesList/List/List';
import styles from './EmployeesList.module.css';

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
				<div className={styles.nav}>
					<Nav />
				</div>
				<div className={styles.employee}>
					<CurrentInfo setSearchTerm={setSearchTerm} onSearch={handleSearch} />
					<List searchTerm={searchQuery} />
				</div>
			</div>
		</>
	);
}

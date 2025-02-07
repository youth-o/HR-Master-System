import Header from '../../components/common/Header/Header';
import Nav from '../../components/common/Nav/Nav';
import CurrentInfo from '../../components/EmployeesList/CurrentInfo/CurrentInfo';
import List from '../../components/EmployeesList/List/List';
import styles from './EmployeesList.module.css';

export default function EmployeesList() {
	return (
		<>
			<Header />
			<div className={styles.layout}>
				<div className={styles.nav}>
					<Nav />
				</div>
				<div className={styles.employee}>
					<CurrentInfo />
					<List />
				</div>
			</div>
		</>
	);
}

import EmployeeMenu from '../../components/common/EmployeeMenu/EmployeeMenu';
import styles from './EmployeeEdit.module.css';
import Header from '../../components/common/Header/Header';
import Nav from '../../components/common/Nav/Nav';

export default function EmployeeEdit() {
	return (
		<>
			<Header />
			<div className={styles.layout}>
				<Nav />
				<div className={styles.employeeEdit}>
					<EmployeeMenu />
				</div>
			</div>
		</>
	);
}

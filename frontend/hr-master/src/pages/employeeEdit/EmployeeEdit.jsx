import EmployeeMenu from '../../components/EmployeeEdit/EmployeeMenu';
import styles from './EmployeeEdit.module.css';
import Header from '../../components/common/Header/Header';
import Nav from '../../components/common/Nav/Nav';

export default function EmployeeEdit() {
	return (
		<div className={styles.employeeEditContainer}>
			<Header />
			<div className={styles.content}>
				<Nav />
				<div className={styles.employeeEdit}>
					<EmployeeMenu />
				</div>
			</div>
		</div>
	);
}

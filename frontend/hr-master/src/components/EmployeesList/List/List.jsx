import useEmployees from '../../../apis/useEmployees';
import styles from './List.module.css';

export default function List() {
	const { employees, loading, error } = useEmployees();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error fetching employees: {error.message}</p>;

	return (
		<div className={styles.listContainer}>
			<h3>전체 사원 조회</h3>
			<div className={styles.table}>
				<p>사번</p>
				<p>이름</p>
				<p>부서</p>
				<p>사내 메일</p>
			</div>
			{employees.length > 0 ? (
				employees.map((employee) => (
					<div className={styles.listBox} key={employee.employeeId}>
						<p>{employee.employeeId}</p>
						<p>{employee.empName}</p>
						<p>{employee.department}</p>
						<p>{employee.companyEmail}</p>
					</div>
				))
			) : (
				<p>No employees found.</p>
			)}
		</div>
	);
}

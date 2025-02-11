import { useNavigate } from 'react-router-dom';
import { useGetEmployees } from '../../../apis/useEmployees';
import styles from './List.module.css';

export default function List({ searchTerm }) {
	const navigate = useNavigate();
	const { employees, loading, error } = useGetEmployees();

	const handleEmployeeClick = (employeeId) => {
		navigate(`/employees/${employeeId}`);
	};

	const filteredEmployees = searchTerm
		? (employees || []).filter((employee) => employee?.employeeId?.toString().includes(searchTerm))
		: employees || [];

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
			{Array.isArray(filteredEmployees) && filteredEmployees.length > 0 ? (
				filteredEmployees.map((employee) => (
					<div
						className={styles.listBox}
						key={employee.employeeId}
						onClick={() => handleEmployeeClick(employee.employeeId)}
					>
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

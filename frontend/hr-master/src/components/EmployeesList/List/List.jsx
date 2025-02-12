import { useNavigate } from 'react-router-dom';
import { useGetEmployees } from '../../../apis/useEmployees';
import styles from './List.module.css';
import { useState } from 'react';

export default function List({ searchTerm }) {
	const navigate = useNavigate();
	const { employees, loading, error } = useGetEmployees();
	const [filterStatus, setFilterStatus] = useState('All');

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
			{/* 필터 버튼 */}
			<div className={styles.filterTabs}>
				<button className={filterStatus === 'All' ? styles.active : ''} onClick={() => setFilterStatus('All')}>
					All
				</button>
				<button
					className={filterStatus === 'Accepted' ? styles.active : ''}
					onClick={() => setFilterStatus('Accepted')}
				>
					Accepted
				</button>
				<button
					className={filterStatus === 'Rejected' ? styles.active : ''}
					onClick={() => setFilterStatus('Rejected')}
				>
					Rejected
				</button>
			</div>

			{/* 사원 조회 테이블 */}
			<table className={styles.table}>
				<thead>
					<tr>
						<th>사번</th>
						<th>이름</th>
						<th>부서</th>
						<th>사내 메일</th>
					</tr>
				</thead>
				<tbody>
					{Array.isArray(filteredEmployees) && filteredEmployees.length > 0 ? (
						filteredEmployees.map((employee) => (
							<tr key={employee.employeeId} onClick={() => handleEmployeeClick(employee.employeeId)}>
								<td>{employee.employeeId}</td>
								<td>{employee.empName}</td>
								<td>{employee.department}</td>
								<td>{employee.companyEmail}</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan="4">No employees found.</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}

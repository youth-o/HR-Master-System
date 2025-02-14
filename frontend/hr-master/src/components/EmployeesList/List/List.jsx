import { useNavigate } from 'react-router-dom';
import { useGetEmployees } from '../../../apis/useEmployees';
import styles from './List.module.css';
import { useState } from 'react';
import Dropdown from '../../common/Dropdown/Dropdown';
import { departmentOptions } from '../../../constants/options';

export default function List({ searchTerm }) {
	const navigate = useNavigate();
	const { employees, loading, error } = useGetEmployees();
	const [filterStatus, setFilterStatus] = useState('All');
	const [selectedDepartment, setSelectedDepartment] = useState('');

	const handleEmployeeClick = (employeeId) => {
		navigate(`/employees/${employeeId}`);
	};

	// 필터링 로직
	const filteredEmployees =
		employees?.filter((employee) => {
			// 검색어 필터링 (사번 또는 이름 포함)
			const matchesSearch =
				!searchTerm ||
				employee?.employeeId?.toString().includes(searchTerm) ||
				employee?.empName?.toLowerCase().includes(searchTerm.toLowerCase());

			// 부서 필터링 (선택한 부서와 일치해야 함)
			const matchesDepartment =
				filterStatus !== 'Accepted' || !selectedDepartment || employee.department === selectedDepartment;

			return matchesSearch && matchesDepartment;
		}) || [];

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error fetching employees: {error.message}</p>;

	return (
		<div className={styles.listContainer}>
			{/* 필터 버튼 */}
			<div className={styles.filterTabs}>
				<button className={filterStatus === 'All' ? styles.active : ''} onClick={() => setFilterStatus('All')}>
					전체
				</button>
				<button
					className={filterStatus === 'Accepted' ? styles.active : ''}
					onClick={() => setFilterStatus('Accepted')}
				>
					부서별
				</button>
			</div>

			{/* 부서 선택 Dropdown (부서별 보기일 때만 표시) */}
			{filterStatus === 'Accepted' && (
				<div className={styles.departmentFilter}>
					<Dropdown menuItems={departmentOptions} onSelect={setSelectedDepartment} defaultValue={selectedDepartment} />
				</div>
			)}

			{/* 사원 조회 테이블 */}
			<table className={styles.table}>
				<thead>
					<tr>
						<th>사번</th>
						<th>이름</th>
						<th>부서</th>
						<th>사내 메일</th>
						<th>사내 전화</th>
					</tr>
				</thead>
				<tbody>
					{filteredEmployees.length > 0 ? (
						filteredEmployees.map((employee) => (
							<tr key={employee.employeeId} onClick={() => handleEmployeeClick(employee.employeeId)}>
								<td>{employee.employeeId}</td>
								<td>{employee.empName}</td>
								<td>{employee.department}</td>
								<td>{employee.companyEmail}</td>
								<td>{employee.companyPhone}</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan="5">No employees found.</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}

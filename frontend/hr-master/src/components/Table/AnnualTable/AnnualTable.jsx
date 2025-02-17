import React, { useState } from 'react';
import './AnnualTable.css';
import { useGetAllLeaves } from '../../../apis/useLeave';

const AnnualTable = ({ searchTerm, setSelectedEmployee }) => {
	const [filterStatus, setFilterStatus] = useState('All');
	const { leaves, loading, error } = useGetAllLeaves();

	// 필터링된 연차 데이터 (검색어 + 승인 상태 적용)
	const filteredLeaves = leaves.filter((leave) => {
		const matchesStatus = filterStatus === 'All' || leave.approvalStatus === filterStatus;
		const matchesSearch =
			!searchTerm ||
			leave?.employee?.employeeId?.toString().includes(searchTerm) ||
			leave?.employee?.empName?.toLowerCase().includes(searchTerm.toLowerCase());

		return matchesStatus && matchesSearch;
	});

	const handleRowClick = (employee) => {
		setSelectedEmployee(employee);
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div className="annual-container">
			{/* 필터 버튼 */}
			<div className="filter-tabs">
				<button className={filterStatus === 'All' ? 'active' : ''} onClick={() => setFilterStatus('All')}>
					전체
				</button>
				<button className={filterStatus === '승인' ? 'active' : ''} onClick={() => setFilterStatus('승인')}>
					승인
				</button>
				<button className={filterStatus === '반려' ? 'active' : ''} onClick={() => setFilterStatus('반려')}>
					반려
				</button>
				<button className={filterStatus === '대기' ? 'active' : ''} onClick={() => setFilterStatus('대기')}>
					대기
				</button>
			</div>

			{/* 연차 관리 테이블 */}
			<table className="annual-table">
				<thead>
					<tr>
						<th>사번</th>
						<th>직원명</th>
						<th>총 연차</th>
						<th>신청 날짜</th>
						<th>승인 여부</th>
						<th>신청 기간</th>
						<th>연차 유형</th>
					</tr>
				</thead>
				<tbody>
					{Array.isArray(filteredLeaves) && filteredLeaves.length > 0 ? (
						filteredLeaves.map((leave) => (
							<tr key={leave.id} onClick={() => handleRowClick(leave.employee)}>
								<td>{leave.employee.employeeId}</td>
								<td>
									<div className="user-info">{leave.employee.empName}</div>
								</td>
								<td>⭐ 15일</td>
								<td>{leave.applicationDate}</td>
								<td>{leave.approvalStatus}</td>
								<td>{leave.period}</td>
								<td>{leave.leaveType}</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan="7" style={{ textAlign: 'center' }}>
								데이터가 없습니다.
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default AnnualTable;

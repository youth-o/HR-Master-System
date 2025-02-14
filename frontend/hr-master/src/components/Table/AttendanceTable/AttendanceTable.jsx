import React, { useState } from 'react';
import './AttendanceTable.css';
import { useGetAllAttendance } from '../../../apis/useAttendance';

const formatTime = (dateTime) => {
	if (!dateTime) return '미출근';
	return dateTime.split('T')[1].substring(0, 5);
};

const adjustStartTime = (clockIn) => {
	if (!clockIn) return null;
	const startTime = new Date(clockIn);
	const nineAM = new Date(startTime);
	nineAM.setHours(9, 0, 0, 0);

	return startTime < nineAM ? nineAM : startTime;
};

const calculateWorkHours = (clockIn, clockOut) => {
	if (!clockIn || !clockOut) return '0시간';

	const start = adjustStartTime(clockIn);
	const end = new Date(clockOut);
	const diff = (end - start) / (1000 * 60 * 60);

	return `${diff.toFixed(1)}시간`;
};

const isToday = (dateString) => {
	const today = new Date().toISOString().split('T')[0];
	return dateString === today;
};

const AttendanceTable = ({ searchTerm }) => {
	const [filterStatus, setFilterStatus] = useState('All');
	const { attendance, loading, error } = useGetAllAttendance();

	// 오늘 날짜의 데이터만 필터링
	const todayAttendance = attendance.filter((record) => isToday(record.attendanceDate));

	const filteredAttendance = todayAttendance.filter((record) => {
		const matchesStatus =
			filterStatus === 'All' ||
			(filterStatus === '출근' && ['정상', '조퇴', '지각'].includes(record.attendanceStatus)) ||
			(filterStatus === '결근' && record.attendanceStatus === '결근');

		const matchesSearch =
			!searchTerm ||
			record?.employee?.employeeId?.toString().includes(searchTerm) ||
			record?.employee?.empName?.toLowerCase().includes(searchTerm.toLowerCase());

		return matchesStatus && matchesSearch;
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div className="attendance-container">
			{/* 필터 버튼 */}
			<div className="filter-tabs">
				<button className={filterStatus === 'All' ? 'active' : ''} onClick={() => setFilterStatus('All')}>
					전체
				</button>
				<button className={filterStatus === '출근' ? 'active' : ''} onClick={() => setFilterStatus('출근')}>
					출근
				</button>
				<button className={filterStatus === '결근' ? 'active' : ''} onClick={() => setFilterStatus('결근')}>
					결근
				</button>
			</div>

			{/* 근태 관리 테이블 */}
			<table className="attendance-table">
				<thead>
					<tr>
						<th>사번</th>
						<th>직원명</th>
						<th>출근시간</th>
						<th>퇴근시간</th>
						<th>총 근무 시간</th>
						<th>현재 근태 상태</th>
					</tr>
				</thead>
				<tbody>
					{filteredAttendance.length > 0 ? (
						filteredAttendance.map((record) => (
							<tr key={record.id}>
								<td>{record.employee.employeeId}</td>
								<td>
									<div className="user-info">{record.employee.empName}</div>
								</td>
								<td>{formatTime(record.clockIn)}</td>
								<td>{formatTime(record.clockOut)}</td>
								<td>{calculateWorkHours(record.clockIn, record.clockOut)}</td>
								<td>{record.attendanceStatus || '확인 필요'}</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan="6" style={{ textAlign: 'center' }}>
								데이터가 없습니다.
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default AttendanceTable;

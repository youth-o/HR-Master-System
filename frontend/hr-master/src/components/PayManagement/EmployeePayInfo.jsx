import React, { useState, useEffect } from 'react';
import './EmployeePayInfo.css';
import employeeImg from '../../assets/PayManagementImgs/employeeimg.png';
import Search from '../common/Search/Search';

const EmployeePayInfo = ({ setSearchTerm, onSearch }) => {
	const employee = {
		name: '곽두팔',
		department: '서한본부 IT 기획 인턴',
		employeeId: '25-158305830',
		salary: '₩1,546.12',
	};

	const [currentDate, setCurrentDate] = useState('');
	const [currentTime, setCurrentTime] = useState('');

	useEffect(() => {
		const updateTime = () => {
			const now = new Date();
			setCurrentDate(now.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' }));
			setCurrentTime(now.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
		};

		updateTime();
		const interval = setInterval(updateTime, 1000);
		return () => clearInterval(interval);
	}, []);

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const style = {
		width: '20rem',
		backgroundColor: '#fff',
		padding: '1rem 1.6rem 1rem 4rem',
		borderRadius: '0.6rem',
		fontFamily: 'Pretendard',
		fontSize: '1.4rem',
		fontStyle: 'normal',
		fontWeight: 400,
		lineHeight: '140%',
		letterSpacing: '-0.014rem',
		border: '1px solid #ddd',
		outline: 'none',
	};

	return (
		<div className="employee-pay-info">
			<div className="employee-header">
				<h3>사원 번호 : {employee.employeeId}</h3>
				<div className="employee-search">
					<Search
						placeholder="사번 또는 이름 검색"
						style={style}
						containerStyle={{ width: '20rem' }}
						onChange={handleSearchChange}
						onSearch={onSearch}
					/>
				</div>
			</div>

			{/* 직원 정보 & 현재 시각을 한 줄로 정렬 */}
			<div className="employee-details">
				<img src={employeeImg} alt="직원 사진" className="employee-avatar" />

				{/* 직원 이름 & 부서 */}
				<div className="employee-text">
					<p className="employee-name">{employee.name}</p>
					<p className="employee-department">{employee.department}</p>
				</div>

				{/* 현재 날짜 & 시간 */}
				<div className="employee-date">
					<p>{currentDate}</p>
					<p>{currentTime}</p>
				</div>

				{/* 급여 */}
				<p className="employee-salary">{employee.salary}</p>

				{/* 송장 버튼 */}
				<button className="invoice-btn">💰 Send Invoice</button>
			</div>
		</div>
	);
};

export default EmployeePayInfo;

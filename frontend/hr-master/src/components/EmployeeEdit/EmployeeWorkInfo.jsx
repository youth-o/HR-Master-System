import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Input from '../common/Input/Input';
import styles from './EmployeeWorkInfo.module.css';
import { useGetEmployee, useUpdateEmployee } from '../../apis/useEmployees';
import Dropdown from '../common/Dropdown/Dropdown';
import { workLocationOptions, positionOptions, departmentOptions } from '../../constants/options';

export default function EmployeeWorkInfo() {
	const { employeeId } = useParams();
	const { employee, loading, error } = useGetEmployee(employeeId);
	const { updateEmployee } = useUpdateEmployee();

	const [formData, setFormData] = useState({
		hireType: '',
		workLocation: '',
		department: '',
		position: '',
		companyEmail: '',
		companyPhone: '',
		retireDate: '',
	});

	useEffect(() => {
		if (employee) {
			setFormData({
				hireType: employee.hireType || '',
				workLocation: employee.workLocation || '',
				department: employee.department || '',
				position: employee.position || '',
				companyEmail: employee.companyEmail || '',
				companyPhone: employee.companyPhone || '',
				retireDate: employee.retireDate || '',
			});
		}
	}, [employee]);

	// ✅ 입력값 변경 핸들러 (읽기 전용 필드 제외)
	const handleChange = (e) => {
		const { id, value } = e.target;
		if (id === 'retireDate' || id === 'hireType') return; // 읽기 전용 필드
		setFormData((prevData) => ({
			...prevData,
			[id]: value,
		}));
	};

	const handleDropdownChange = (field, selected) => {
		setFormData((prev) => ({
			...prev,
			[field]: selected,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const updatedFields = {};
		Object.keys(formData).forEach((key) => {
			if (key !== 'retireDate' && key !== 'hireType' && formData[key] !== employee[key]) {
				updatedFields[key] = formData[key];
			}
		});

		if (Object.keys(updatedFields).length > 0) {
			await updateEmployee(employeeId, updatedFields);
			alert('근무 정보가 수정되었습니다.');
		} else {
			alert('변경 사항이 없습니다.');
		}
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error fetching employee data: {error.message}</p>;
	if (!employee) return <p>No employee found.</p>;

	return (
		<div className={styles.infoContainer}>
			<h3>근무 정보</h3>
			<form className={styles.infoForm} onSubmit={handleSubmit}>
				<div className={styles.row}>
					<Input id="hireType" label="입사 구분" readOnly={true} value={formData.hireType} />
					<Dropdown
						label="근무지"
						menuItems={workLocationOptions}
						defaultValue={formData.workLocation}
						onSelect={(val) => handleDropdownChange('workLocation', val)}
					/>
					<Dropdown
						label="부서"
						menuItems={departmentOptions}
						defaultValue={formData.department}
						onSelect={(val) => handleDropdownChange('department', val)}
					/>
				</div>
				<div className={styles.row}>
					<Dropdown
						label="직급"
						menuItems={positionOptions}
						defaultValue={formData.position}
						onSelect={(val) => handleDropdownChange('position', val)}
					/>
					<Input
						id="companyEmail"
						type="email"
						label="사내 메일"
						value={formData.companyEmail}
						onChange={handleChange}
					/>
					<Input id="companyPhone" label="사내 전화" value={formData.companyPhone} onChange={handleChange} />
				</div>
				<div className={styles.row}>
					<Input id="retireDate" label="퇴사 일자" readOnly value={formData.retireDate} />
				</div>
				<button type="submit">Save</button>
			</form>
		</div>
	);
}

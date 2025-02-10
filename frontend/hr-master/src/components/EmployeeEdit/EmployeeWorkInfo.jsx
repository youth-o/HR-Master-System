import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Input from '../common/Input/Input';
import styles from './EmployeeWorkInfo.module.css';
import { useGetEmployee, useUpdateEmployee } from '../../apis/useEmployees';

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

	const handleChange = (e) => {
		const { id, value } = e.target;
		if (id === 'retireDate') return;
		setFormData((prevData) => ({
			...prevData,
			[id]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const updatedFields = {};
		Object.keys(formData).forEach((key) => {
			if (key !== 'retireDate' && formData[key] !== employee[key]) {
				updatedFields[key] = formData[key];
			}
		});

		if (Object.keys(updatedFields).length > 0) {
			await updateEmployee(employeeId, updatedFields);
			alert('근무 정보가 수정되었습니다.');
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
					<Input
						id="hireType"
						label="입사 구분"
						readOnly={true}
						placeholder={employee.hireType}
						onChange={handleChange}
					/>
					<Input id="workLocation" label="근무지" placeholder={employee.workLocation} />
					<Input id="department" label="부서" placeholder={employee.department} onChange={handleChange} />
				</div>
				<div className={styles.row}>
					<Input id="position" label="직급" placeholder={employee.position} onChange={handleChange} />
					<Input id="empEngName" label="회사 근무 사항" />
					<Input id="." label="고과 여부" />
				</div>
				<div className={styles.row}>
					<Input
						id="companyEmail"
						type="email"
						label="사내 메일"
						placeholder={employee.companyEmail}
						onChange={handleChange}
					/>
					<Input id="companyPhone" label="사내 전화" placeholder={employee.companyPhone} onChange={handleChange} />
					<Input id="retireDate" label="퇴사 일자" readOnly placeholder={employee.retireDate} />
				</div>
				<button type="submit">Save</button>
			</form>
		</div>
	);
}

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Input from '../common/Input/Input';
import Dropdown from '../common/Dropdown/Dropdown';
import { militaryOptions } from '../../constants/options';
import styles from './EmployeeInfo.module.css';
import { useGetEmployee, useUpdateEmployee } from '../../apis/useEmployees';

export default function EmployeeInfo() {
	const { employeeId } = useParams();
	const navigate = useNavigate();
	const { employee, loading, error } = useGetEmployee(employeeId);
	const { updateEmployee } = useUpdateEmployee();

	const [searchTerm, setSearchTerm] = useState('');

	const [formData, setFormData] = useState({
		employeeId: '',
		ssn: '',
		phone: '',
		empName: '',
		empEngName: '',
		hireDate: '',
		nationality: '',
		militaryService: '',
		address: '',
	});

	useEffect(() => {
		if (employee) {
			setFormData({
				employeeId: employee.employeeId || '',
				ssn: employee.ssn || '',
				phone: employee.phone || '',
				empName: employee.empName || '',
				empEngName: employee.empEngName || '',
				hireDate: employee.hireDate || '',
				nationality: employee.nationality || '',
				militaryService: employee.militaryService || '',
				address: employee.address || '',
			});
			// 검색창 초기화 (현재 조회 중인 사번으로 설정)
			setSearchTerm(employee.employeeId || '');
		}
	}, [employee]);

	const handleChange = (e) => {
		const { id, value } = e.target;
		if (id === 'ssn' || id === 'hireDate') return; // 읽기 전용 필드 제외
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
			if (key !== 'hireDate' && key !== 'ssn' && formData[key] !== employee[key]) {
				updatedFields[key] = formData[key];
			}
		});

		if (Object.keys(updatedFields).length > 0) {
			await updateEmployee(employeeId, updatedFields);
			alert('개인 정보가 수정되었습니다.');
		}
	};

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSearch = () => {
		if (searchTerm) {
			navigate(`/employees/${searchTerm}`);
		}
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error fetching employee data: {error.message}</p>;
	if (!employee) return <p>No employee found.</p>;

	return (
		<div className={styles.infoContainer}>
			<h3>개인 정보</h3>
			<form className={styles.infoForm} onSubmit={handleSubmit}>
				<div className={styles.row}>
					{/* 검색어 입력 시 별도의 상태 사용하여 이동 가능 */}
					<Input
						id="employeeId"
						label="사번(ID)"
						searchTrue
						value={searchTerm}
						placeholder="사번 입력"
						onChange={handleSearchChange}
						onSearch={handleSearch}
					/>
					<Input id="ssn" label="주민번호" readOnly value={formData.ssn} />
					<Input id="phone" label="연락처" value={formData.phone} onChange={handleChange} />
				</div>
				<div className={styles.row}>
					<Input id="empName" label="이름" value={formData.empName} onChange={handleChange} />
					<Input id="empEngName" label="영문 이름" value={formData.empEngName} onChange={handleChange} />
					<Input id="hireDate" label="입사일" readOnly value={formData.hireDate} />
				</div>
				<div className={styles.row}>
					<Input id="nationality" label="국적" value={formData.nationality} onChange={handleChange} />
					<Dropdown
						label="군필 여부"
						menuItems={militaryOptions}
						defaultValue={formData.militaryService}
						onSelect={(val) => handleDropdownChange('militaryService', val)}
					/>
					<Input id="address" label="주소" value={formData.address} onChange={handleChange} />
				</div>
				<button type="submit">Save</button>
			</form>
		</div>
	);
}

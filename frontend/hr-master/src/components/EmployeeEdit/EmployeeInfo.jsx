import { useParams } from 'react-router-dom';
import Input from '../common/Input/Input';
import styles from './EmployeeInfo.module.css';
import { useEmployee } from '../../apis/useEmployees';

export default function EmployeeInfo() {
	const { employeeId } = useParams();
	const { employee, loading, error } = useEmployee(employeeId);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error fetching employee data: {error.message}</p>;
	if (!employee) return <p>No employee found.</p>;

	return (
		<div className={styles.infoContainer}>
			<h3>개인 정보</h3>
			<form className={styles.infoForm}>
				<div className={styles.row}>
					<Input id="employeeId" label="사번(ID)" searchTrue placeholder={employee.employeeId} />
					<Input id="ssn" label="주민번호" readOnly placeholder={employee.ssn} />
					<Input id="phone" label="연락처" placeholder={employee.phone} />
				</div>
				<div className={styles.row}>
					<Input id="empName" label="이름" placeholder={employee.empName} />
					<Input id="empEngName" label="영문 이름" placeholder={employee.empEngName} />
					<Input id="." label="??" />
				</div>
				<div className={styles.row}>
					<Input id="companyEmail" label="사내 메일" placeholder={employee.companyEmail} />
					<Input id="companyPhone" label="사내 전화" placeholder={employee.companyPhone} />
					<Input id="hireDate" label="입사일" readOnly placeholder={employee.hireDate} />
				</div>
				<div className={styles.row}>
					<Input id="nationality" label="국적" placeholder={employee.nationality} />
					<Input id="militaryService" label="군필 여부" placeholder={employee.militaryService} />
					<Input id="address" label="주소" placeholder={employee.address} />
				</div>
				<button type="submit">Save</button>
			</form>
		</div>
	);
}

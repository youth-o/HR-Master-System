import { useParams } from 'react-router-dom';
import Input from '../common/Input/Input';
import styles from './EmployeeWorkInfo.module.css';
import { useEmployee } from '../../apis/useEmployees';

export default function EmployeeWorkInfo() {
	const { employeeId } = useParams();
	const { employee, loading, error } = useEmployee(employeeId);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error fetching employee data: {error.message}</p>;
	if (!employee) return <p>No employee found.</p>;

	return (
		<div className={styles.infoContainer}>
			<h3>근무 정보</h3>
			<form className={styles.infoForm}>
				<div className={styles.row}>
					<Input id="hireType" label="입사 구분" readOnly={true} placeholder={employee.hireType} />
					<Input id="workLocation" label="근무지" placeholder={employee.workLocation} />
					<Input id="department" label="부서" placeholder={employee.department} />
				</div>
				<div className={styles.row}>
					<Input id="position" label="직급" placeholder={employee.position} />
					<Input id="empEngName" label="회사 근무 사항" />
					<Input id="." label="고과 여부" />
				</div>
				<div className={styles.row}>
					<Input id="retireDate" label="퇴사 일자" readOnly placeholder={employee.retireDate} />
					<Input id="companyPhone" label="퇴직 사유" readOnly />
					<Input id="hireDate" label="퇴직금 금액" readOnly />
				</div>
				<button type="submit">Save</button>
			</form>
		</div>
	);
}

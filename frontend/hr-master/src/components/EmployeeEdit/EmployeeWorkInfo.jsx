import Input from '../common/Input/Input';
import styles from './EmployeeWorkInfo.module.css';

export default function EmployeeWorkInfo() {
	return (
		<div className={styles.infoContainer}>
			<h3>근무 정보</h3>
			<form className={styles.infoForm}>
				<div className={styles.row}>
					<Input id="employeeId" label="입사 구분" readOnly={true} />
					<Input id="ssn" label="근무지" />
					<Input id="phone" label="부서" />
				</div>
				<div className={styles.row}>
					<Input id="empName" label="직급" />
					<Input id="empEngName" label="회사 근무 사항" />
					<Input id="." label="고과 여부" />
				</div>
				<div className={styles.row}>
					<Input id="companyEmail" label="퇴사 일자" />
					<Input id="companyPhone" label="퇴직 사유" />
					<Input id="hireDate" label="퇴직금 금액" />
				</div>
				<button type="submit">Save</button>
			</form>
		</div>
	);
}

import Input from '../common/Input/Input';
import styles from './EmployeeInfo.module.css';

export default function EmployeeInfo() {
	return (
		<div className={styles.infoContainer}>
			<h3>개인 정보</h3>
			<form className={styles.infoForm}>
				<div className={styles.row}>
					<Input id="employeeId" label="사번(ID)" searchTrue />
					<Input id="ssn" label="주민번호" readOnly />
					<Input id="phone" label="연락처" />
				</div>
				<div className={styles.row}>
					<Input id="empName" label="이름" />
					<Input id="empEngName" label="영문 이름" />
					<Input id="." label="??" />
				</div>
				<div className={styles.row}>
					<Input id="companyEmail" label="사내 메일" />
					<Input id="companyPhone" label="사내 전화" />
					<Input id="hireDate" label="입사일" readOnly />
				</div>
				<div className={styles.row}>
					<Input id="nationality" label="국적" />
					<Input id="militaryService" label="군필 여부" />
					<Input id="address" label="주소" />
				</div>
				<button type="submit">Save</button>
			</form>
		</div>
	);
}

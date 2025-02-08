import Input from '../common/Input/Input';
import styles from './EmployeeInfo.module.css';

export default function EmployeeInfo() {
	return (
		<div className={styles.infoContainer}>
			<h3>개인 정보</h3>
			<form className={styles.infoForm}>
				<div className={styles.row}>
					<Input id="employeeId" label="사번(ID)" searchTrue />
					<Input id="ssn" label="주민번호" searchTrue={false} />
					<Input id="phone" label="연락처" searchTrue={false} />
				</div>
				<div className={styles.row}>
					<Input id="empName" label="이름" searchTrue={false} />
					<Input id="empEngName" label="영문 이름" searchTrue={false} />
					<Input id="." label="??" searchTrue={false} />
				</div>
				<div className={styles.row}>
					<Input id="companyEmail" label="사내 메일" searchTrue={false} />
					<Input id="companyPhone" label="사내 전화" searchTrue={false} />
					<Input id="hireDate" label="입사일" searchTrue={false} />
				</div>
				<div className={styles.row}>
					<Input id="nationality" label="국적" searchTrue={false} />
					<Input id="militaryService" label="군필 여부" searchTrue={false} />
					<Input id="address" label="주소" searchTrue={false} />
				</div>
				<button type="submit">Save</button>
			</form>
		</div>
	);
}

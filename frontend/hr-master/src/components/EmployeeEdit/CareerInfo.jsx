import { useState } from 'react';
import Input from '../common/Input/Input';
import styles from './CareerInfo.module.css';
import plus from '../../assets/btn_add.svg';

export default function CareerInfo() {
	const [careerList, setCareerList] = useState([]);

	const handleAddCertification = () => {
		setCareerList([
			...careerList,
			{
				id: Date.now(),
				changeDate: '',
				changeType: '',
				workLocation: '',
				department: '',
				position: '',
				startDate: '',
				endDate: '',
				notes: '',
			},
		]);
	};

	const style = {
		width: '50rem',
	};

	return (
		<div className={styles.infoContainer}>
			<h3>사내 경력</h3>
			<form className={styles.infoForm}>
				{careerList.map((career, index) => (
					<div className={styles.rowContainer} key={career.id}>
						<div className={styles.row}>
							<Input id={`changeDate-${career.id}`} label="변경일" style={style} />
							<Input id={`changeType-${career.id}`} label="변경 구분" style={style} />
						</div>
						<div className={styles.row}>
							<Input id={`workLocation-${career.id}`} label="근무지" />
							<Input id={`department-${career.id}`} label="부서" />
							<Input id={`position-${career.id}`} label="직급" />
						</div>
						<div className={styles.row}>
							<Input id={`startDate-${career.id}`} label="근무 시작일" />
							<Input id={`endDate-${career.id}`} label="근무 종료일" />
							<Input id={`notes-${career.id}`} label="비고" />
						</div>
					</div>
				))}
				<div className={styles.row}>
					<img src={plus} alt="추가 버튼" onClick={handleAddCertification} />
				</div>
				<button type="submit">Save</button>
			</form>
			<h3>사외 경력</h3>
			<div className={styles.row}>
				<Input id="companyName" label="회사명" readOnly={true} />
				<Input id="jobTitle" label="직무" readOnly={true} />
				<Input id="position" label="직급" readOnly={true} />
			</div>
			<div className={styles.row}>
				<Input id="hireDate" label="입사일" readOnly={true} />
				<Input id="resignationDate" label="퇴사일" readOnly={true} />
				<Input id="annualSalary" label="연봉" readOnly={true} />
			</div>
		</div>
	);
}

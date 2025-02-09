import { useState } from 'react';
import styles from './EducationInfo.module.css';
import plus from '../../assets/btn_add.svg';
import Input from '../common/Input/Input';

export default function EducationInfo() {
	const [educationList, setEducationList] = useState([]);

	const handleAddEducation = () => {
		setEducationList([
			...educationList,
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
			<h3>교육 이력</h3>
			<form className={styles.infoForm}>
				{educationList.map((education, index) => (
					<div className={styles.rowContainer} key={education.id}>
						<div className={styles.row}>
							<Input id={`educationType-${education.id}`} label="교육 구분" />
							<Input id={`startDate-${education.id}`} label="교육 시작일" />
							<Input id={`endDate-${education.id}`} label="교육 종료일" />
						</div>
						<div className={styles.row}>
							<Input id={`courseName-${education.id}`} label="교육명" style={style} />
							<Input id={`organizer-${education.id}`} label="주관처" style={style} />
						</div>
					</div>
				))}
				<div className={styles.row}>
					<img src={plus} alt="추가 버튼" onClick={handleAddEducation} />
				</div>
				<button type="submit">Save</button>
			</form>
		</div>
	);
}

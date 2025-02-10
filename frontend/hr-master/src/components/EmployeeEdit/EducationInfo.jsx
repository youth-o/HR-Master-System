import { useState, useEffect } from 'react';
import styles from './EducationInfo.module.css';
import plus from '../../assets/btn_add.svg';
import Input from '../common/Input/Input';
import { useGetEducations } from '../../apis/useEducation';
import { useParams } from 'react-router-dom';

export default function EducationInfo() {
	const { employeeId } = useParams();
	const { education, loading, error } = useGetEducations(employeeId);
	const [educationList, setEducationList] = useState([]);

	useEffect(() => {
		if (education) {
			setEducationList(education);
		}
	}, [education]);

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

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error fetching education info: {error.message}</p>;

	return (
		<div className={styles.infoContainer}>
			<h3>교육 이력</h3>
			<form className={styles.infoForm}>
				{educationList.map((education, index) => (
					<div className={styles.rowContainer} key={education.educationId}>
						<div className={styles.row}>
							<Input id={`educationType-${education.id}`} label="교육 구분" placeholder={education.educationType} />
							<Input id={`startDate-${education.id}`} label="교육 시작일" placeholder={education.startDate} />
							<Input id={`endDate-${education.id}`} label="교육 종료일" placeholder={education.endDate} />
						</div>
						<div className={styles.row}>
							<Input
								id={`courseName-${education.id}`}
								label="교육명"
								placeholder={education.courseName}
								style={style}
							/>
							<Input id={`organizer-${education.id}`} label="주관처" placeholder={education.organizer} style={style} />
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

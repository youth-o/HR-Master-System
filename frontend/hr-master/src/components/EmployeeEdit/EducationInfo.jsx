import { useState, useEffect } from 'react';
import styles from './EducationInfo.module.css';
import plus from '../../assets/btn_add.svg';
import Input from '../common/Input/Input';
import { useAddEducation, useDeleteEducation, useGetEducations, useUpdateEducation } from '../../apis/useEducation';
import { useParams } from 'react-router-dom';
import x from '../../assets/btn_X.svg';

export default function EducationInfo() {
	const { employeeId } = useParams();
	const { education, loading, error } = useGetEducations(employeeId);
	const { addEducation } = useAddEducation();
	const { updateEducation } = useUpdateEducation();
	const { deleteEducation } = useDeleteEducation();
	const [educationList, setEducationList] = useState([]);
	const [deletedEducationIds, setDeletedEducationIds] = useState([]);

	useEffect(() => {
		if (education) {
			setEducationList(education);
		}
	}, [education]);

	const handleEducationChange = (index, field, value) => {
		setEducationList((prevList) =>
			prevList.map((education, i) => (i === index ? { ...education, [field]: value } : education))
		);
	};

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

	const handleRemoveEducation = (index) => {
		const education = educationList[index];

		if (education.educationId) {
			setDeletedEducationIds((prev) => [...prev, education.educationId]);
		}

		setEducationList((prev) => prev.filter((_, i) => i !== index));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		let newEducations = [];
		let updatedEducations = [];

		for (const education of educationList) {
			if (education.educationId) {
				updatedEducations.push(education);
			} else {
				newEducations.push(education);
			}
		}

		try {
			for (const education of updatedEducations) {
				await updateEducation(employeeId, education.educationId, {
					educationType: education.educationType || null,
					startDate: education.startDate || null,
					endDate: education.endDate || null,
					courseName: education.courseName || null,
					organizer: education.organizer || null,
				});
			}

			for (const education of newEducations) {
				const addedEducation = await addEducation(employeeId, {
					educationType: education.educationType || null,
					startDate: education.startDate || null,
					endDate: education.endDate || null,
					courseName: education.courseName || null,
					organizer: education.organizer || null,
				});
				education.educationId = addedEducation.educationId;
			}

			for (const educationId of deletedEducationIds) {
				await deleteEducation(employeeId, educationId);
			}

			setEducationList([...updatedEducations, ...newEducations]);
			setDeletedEducationIds([]);

			alert('교육 이력이 저장되었습니다.');
		} catch (error) {
			alert('교육 이력 저장 중 오류가 발생했습니다.');
			console.error(error);
		}
	};

	const style = {
		width: '50rem',
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error fetching education info: {error.message}</p>;

	return (
		<div className={styles.infoContainer}>
			<h3>교육 이력</h3>
			<form className={styles.infoForm} onSubmit={handleSubmit}>
				{educationList.map((education, index) => (
					<div className={styles.rowContainer} key={education.educationId}>
						<div className={`${styles.row} ${styles.educationRow}`}>
							<Input
								id={`educationType-${education.id}`}
								label="교육 구분"
								placeholder={education.educationType}
								onChange={(e) => handleEducationChange(index, 'educationType', e.target.value)}
							/>
							<Input
								id={`startDate-${education.id}`}
								type="date"
								label="교육 시작일"
								value={education.startDate}
								onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
							/>
							<Input
								id={`endDate-${education.id}`}
								type="date"
								label="교육 종료일"
								value={education.endDate}
								onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
							/>
							<img
								src={x}
								alt="삭제 버튼"
								className={styles.deleteButton}
								onClick={() => handleRemoveEducation(index)}
							/>
						</div>
						<div className={styles.row}>
							<Input
								id={`courseName-${education.id}`}
								label="교육명"
								placeholder={education.courseName}
								style={style}
								onChange={(e) => handleEducationChange(index, 'courseName', e.target.value)}
							/>
							<Input
								id={`organizer-${education.id}`}
								label="주관처"
								placeholder={education.organizer}
								style={style}
								onChange={(e) => handleEducationChange(index, 'organizer', e.target.value)}
							/>
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

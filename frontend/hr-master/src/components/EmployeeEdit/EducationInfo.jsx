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
		setEducationList(education ? education.map((edu) => ({ ...edu })) : []);
	}, [education]);

	const handleEducationChange = (index, field, value) => {
		setEducationList((prevList) =>
			prevList.map(
				(edu, i) => (i === index ? { ...edu, [field]: value || '' } : edu) // undefined 방지
			)
		);
	};

	const handleAddEducation = () => {
		setEducationList([
			...educationList,
			{
				educationId: null,
				educationType: '',
				startDate: '',
				endDate: '',
				courseName: '',
				organizer: '',
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

		const newEducations = educationList.filter((edu) => edu.educationId === null);
		const updatedEducations = educationList.filter((edu) => edu.educationId !== null);

		try {
			for (const education of updatedEducations) {
				await updateEducation(employeeId, education.educationId, {
					educationType: education.educationType || '',
					startDate: education.startDate || '',
					endDate: education.endDate || '',
					courseName: education.courseName || '',
					organizer: education.organizer || '',
				});
			}

			let addedEducations = [];
			for (const education of newEducations) {
				const addedEducation = await addEducation(employeeId, {
					educationType: education.educationType || '',
					startDate: education.startDate || '',
					endDate: education.endDate || '',
					courseName: education.courseName || '',
					organizer: education.organizer || '',
				});
				addedEducations.push({ ...education, educationId: addedEducation.educationId });
			}

			for (const educationId of deletedEducationIds) {
				await deleteEducation(employeeId, educationId);
			}

			setEducationList([...updatedEducations, ...addedEducations]);
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
					<div className={styles.rowContainer} key={education.educationId || index}>
						<div className={`${styles.row} ${styles.educationRow}`}>
							<Input
								id={`educationType-${index}`}
								label="교육 구분"
								value={education.educationType || ''}
								onChange={(e) => handleEducationChange(index, 'educationType', e.target.value)}
							/>
							<Input
								id={`startDate-${index}`}
								type="date"
								label="교육 시작일"
								value={education.startDate || ''}
								onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
							/>
							<Input
								id={`endDate-${index}`}
								type="date"
								label="교육 종료일"
								value={education.endDate || ''}
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
								id={`courseName-${index}`}
								label="교육명"
								value={education.courseName || ''}
								style={style}
								onChange={(e) => handleEducationChange(index, 'courseName', e.target.value)}
							/>
							<Input
								id={`organizer-${index}`}
								label="주관처"
								value={education.organizer || ''}
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

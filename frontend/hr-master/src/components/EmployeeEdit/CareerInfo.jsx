import { useEffect, useState } from 'react';
import Input from '../common/Input/Input';
import styles from './CareerInfo.module.css';
import plus from '../../assets/btn_add.svg';
import x from '../../assets/btn_X.svg';
import {
	useAddCompanyCareer,
	useDeleteCompanyCareer,
	useGetCompanyCareers,
	useGetExternalCareers,
	useUpdateCompanyCareer,
} from '../../apis/useCareer';
import { useParams } from 'react-router-dom';
import Dropdown from '../common/Dropdown/Dropdown';
import { changeTypeOptions, departmentOptions, positionOptions, workLocationOptions } from '../../constants/options';

export default function CareerInfo() {
	const { employeeId } = useParams();
	const { companyCareer, loading, error } = useGetCompanyCareers(employeeId);
	const { externalCareer } = useGetExternalCareers(employeeId);
	const { addCompanyCareer } = useAddCompanyCareer();
	const { updateCompanyCareer } = useUpdateCompanyCareer();
	const { deleteComapnyCareer } = useDeleteCompanyCareer();

	const [careerList, setCareerList] = useState([]);
	const [newCareers, setNewCareers] = useState([]);
	const [deletedCareers, setDeletedCareers] = useState([]);

	useEffect(() => {
		if (companyCareer) {
			setCareerList(companyCareer);
		}
	}, [companyCareer]);

	const handleCareerChange = (index, field, value) => {
		setCareerList((prevList) => prevList.map((career, i) => (i === index ? { ...career, [field]: value } : career)));
		setNewCareers((prevList) =>
			prevList.map((career, i) =>
				career.historyId === newCareers[i]?.historyId ? { ...career, [field]: value } : career
			)
		);
	};

	const handleDropdownChange = (index, field, selected) => {
		setCareerList((prevList) => prevList.map((career, i) => (i === index ? { ...career, [field]: selected } : career)));
		setNewCareers((prevList) =>
			prevList.map((career, i) =>
				career.historyId === newCareers[i]?.historyId ? { ...career, [field]: selected } : career
			)
		);
	};

	const handleAddCareer = () => {
		const newCareer = {
			historyId: Date.now().toString,
			changeDate: '',
			changeType: '',
			division: '',
			department: '',
			position: '',
			startDate: '',
			endDate: '',
			notes: '',
			isNew: true,
		};
		setNewCareers([...newCareers, newCareer]);
	};

	const handleDeleteCareer = (index, career) => {
		if (!career.isNew) {
			setDeletedCareers([...deletedCareers, career]);
		}
		setCareerList((prevList) => prevList.filter((_, i) => i !== index));
		setNewCareers((prevList) => prevList.filter((_, i) => i !== index));
	};

	const formatDateTime = (dateString) => {
		if (!dateString) return null;
		return dateString.includes('T') ? dateString.split('T')[0] + 'T00:00:00' : dateString + 'T00:00:00';
	};

	const handleSave = async (event) => {
		event.preventDefault();
		try {
			// 기존 경력 수정 처리
			await Promise.all(
				careerList.map(async (career) => {
					if (!career.isNew && career.historyId) {
						await updateCompanyCareer(employeeId, career.historyId, {
							...career,
							changeDate: formatDateTime(career.changeDate),
							startDate: formatDateTime(career.startDate),
							endDate: formatDateTime(career.endDate),
						});
					}
				})
			);

			// 새로운 경력 추가 처리
			await Promise.all(
				newCareers.map(async (newCareer) => {
					const response = await addCompanyCareer(employeeId, {
						...newCareer,
						changeDate: formatDateTime(newCareer.changeDate),
						startDate: formatDateTime(newCareer.startDate),
						endDate: formatDateTime(newCareer.endDate),
					});
					if (response && response.historyId) {
						setCareerList((prevList) => [...prevList, { ...newCareer, historyId: response.historyId, isNew: false }]);
					}
				})
			);

			// 삭제된 경력 처리
			await Promise.all(
				deletedCareers.map(async (career) => {
					await deleteComapnyCareer(employeeId, career.historyId);
				})
			);

			setNewCareers([]);
			setDeletedCareers([]);

			alert('사내 경력 정보가 수정되었습니다.');
		} catch (err) {
			console.error('Error saving careers:', err);
		}
	};

	const style = {
		width: '50rem',
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error fetching career info: {error.message}</p>;

	return (
		<div className={styles.infoContainer}>
			<h3>사내 경력</h3>
			<form className={styles.infoForm}>
				{[...careerList, ...newCareers].map((career, index) => (
					<div className={styles.rowContainer} key={career.companyCareerId || index}>
						<div className={`${styles.row} ${styles.careerRow}`}>
							<Input
								id={`changeDate-${index}`}
								type="date"
								label="변경일"
								value={career.changeDate ? career.changeDate.split('T')[0] : ''}
								style={style}
								onChange={(e) => handleCareerChange(index, 'changeDate', e.target.value)}
							/>
							<Dropdown
								label="변경 구분"
								menuItems={changeTypeOptions}
								defaultValue={career.changeType}
								onSelect={(val) => handleDropdownChange(index, 'changeType', val)}
								style={style}
							/>
							<img
								src={x}
								alt="삭제 버튼"
								className={styles.deleteButton}
								onClick={() => handleDeleteCareer(index, career)}
							/>
						</div>
						<div className={styles.row}>
							<Dropdown
								label="근무지"
								menuItems={workLocationOptions}
								defaultValue={career.division}
								onSelect={(val) => handleDropdownChange(index, 'division', val)}
							/>
							<Dropdown
								label="부서"
								menuItems={departmentOptions}
								defaultValue={career.department}
								onSelect={(val) => handleDropdownChange(index, 'department', val)}
							/>
							<Dropdown
								label="직급"
								menuItems={positionOptions}
								defaultValue={career.position}
								onSelect={(val) => handleDropdownChange(index, 'position', val)}
							/>
						</div>
						<div className={styles.row}>
							<Input
								id={`startDate-${index}`}
								type="date"
								label="근무 시작일"
								value={career.startDate ? career.startDate.split('T')[0] : ''}
								onChange={(e) => handleCareerChange(index, 'startDate', e.target.value)}
							/>
							<Input
								id={`endDate-${index}`}
								type="date"
								label="근무 종료일"
								value={career.endDate ? career.endDate.split('T')[0] : ''}
								onChange={(e) => handleCareerChange(index, 'endDate', e.target.value)}
							/>
							<Input
								id={`notes-${index}`}
								label="비고"
								value={career.notes}
								onChange={(e) => handleCareerChange(index, 'notes', e.target.value)}
							/>
						</div>
					</div>
				))}
				<div className={styles.row}>
					<img src={plus} alt="추가 버튼" onClick={handleAddCareer} />
				</div>
				<button type="button" onClick={handleSave}>
					Save
				</button>
			</form>
			<h3>사외 경력</h3>
			{externalCareer?.length > 0 ? (
				externalCareer.map((career, index) => (
					<div key={career.externalCareerId || index} className={styles.externalCareerContainer}>
						<div className={styles.row}>
							<Input
								id={`companyName-${index}`}
								label="회사명"
								placeholder={career.companyName || ''}
								readOnly={true}
							/>
							<Input id={`jobTitle-${index}`} label="직무" placeholder={career.jobTitle || ''} readOnly={true} />
							<Input id={`position-${index}`} label="직급" placeholder={career.position || ''} readOnly={true} />
						</div>
						<div className={styles.row}>
							<Input id={`hireDate-${index}`} label="입사일" placeholder={career.hireDate || ''} readOnly={true} />
							<Input
								id={`resignationDate-${index}`}
								label="퇴사일"
								placeholder={career.resignationDate || ''}
								readOnly={true}
							/>
							<Input
								id={`annualSalary-${index}`}
								label="연봉"
								placeholder={career.annualSalary || ''}
								readOnly={true}
							/>
						</div>
					</div>
				))
			) : (
				<p>사외 경력 정보가 없습니다.</p>
			)}
		</div>
	);
}

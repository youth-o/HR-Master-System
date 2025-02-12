import { useEffect, useState } from 'react';
import Input from '../common/Input/Input';
import styles from './CareerInfo.module.css';
import plus from '../../assets/btn_add.svg';
import x from '../../assets/btn_X.svg';
import { useDeleteCompanyCareer, useGetCompanyCareers, useGetExternalCareers } from '../../apis/useCareer';
import { useParams } from 'react-router-dom';
import Dropdown from '../common/Dropdown/Dropdown';
import { changeTypeOptions, departmentOptions, positionOptions, workLocationOptions } from '../../constants/options';

export default function CareerInfo() {
	const { employeeId } = useParams();
	const { companyCareer, loading, error } = useGetCompanyCareers(employeeId);
	const { externalCareer } = useGetExternalCareers(employeeId);
	const [careerList, setCareerList] = useState([]);
	const [deletedCareerIds, setDeletedCareerIds] = useState([]);

	useEffect(() => {
		if (companyCareer) {
			setCareerList(companyCareer);
		}
	}, [companyCareer]);

	const handleCareerChange = (index, field, value) => {
		setCareerList((prevList) => prevList.map((career, i) => (i === index ? { ...career, [field]: value } : career)));
	};

	const handleDropdownChange = (index, field, selected) => {
		setCareerList((prevList) => prevList.map((career, i) => (i === index ? { ...career, [field]: selected } : career)));
	};

	const handleAddCareer = () => {
		setCareerList([
			...careerList,
			{
				id: Date.now(),
				changeDate: '',
				changeType: '',
				division: '',
				department: '',
				position: '',
				startDate: '',
				endDate: '',
				notes: '',
			},
		]);
	};

	const handleDeleteCareer = (index, careerId) => {
		if (careerId) {
			setDeletedCareerIds((prevIds) => [...prevIds, careerId]);
			console.log(`Added to delete list: ${careerId}`);
		}
		setCareerList((prevList) => prevList.filter((_, i) => i !== index));
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
				{careerList.map((career, index) => (
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
								onClick={() => handleDeleteCareer(index, career.id)}
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
				<button type="submit">Save</button>
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

import { useEffect, useState } from 'react';
import Input from '../common/Input/Input';
import styles from './CareerInfo.module.css';
import plus from '../../assets/btn_add.svg';
import { useGetCompanyCareers } from '../../apis/useCareer';
import { useParams } from 'react-router-dom';
import Dropdown from '../common/Dropdown/Dropdown';
import { changeTypeOpntions, departmentOptions, positionOptions, workLocationOptions } from '../../constants/options';

export default function CareerInfo() {
	const { employeeId } = useParams();
	const { companyCareer, loading, error } = useGetCompanyCareers(employeeId);
	const [careerList, setCareerList] = useState([]);

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
	if (error) return <p>Error fetching career info: {error.message}</p>;

	return (
		<div className={styles.infoContainer}>
			<h3>사내 경력</h3>
			<form className={styles.infoForm}>
				{careerList.map((career, index) => (
					<div className={styles.rowContainer} key={career.historyId}>
						<div className={styles.row}>
							<Input
								id={`changeDate-${career.id}`}
								type="date"
								label="변경일"
								value={career.changeDate ? career.changeDate.split('T')[0] : ''}
								style={style}
								onChange={(e) => handleCareerChange(index, 'changeDate', e.target.value)}
							/>
							<Dropdown
								label="변경 구분"
								menuItems={changeTypeOpntions}
								defaultValue={career.changeType}
								onSelect={(val) => handleDropdownChange('workLocation', val)}
								style={style}
							/>
						</div>
						<div className={styles.row}>
							<Dropdown
								label="근무지"
								menuItems={workLocationOptions}
								defaultValue={career.division}
								onSelect={(val) => handleDropdownChange('division', val)}
							/>
							<Dropdown
								label="부서"
								menuItems={departmentOptions}
								defaultValue={career.department}
								onSelect={(val) => handleDropdownChange('department', val)}
							/>
							<Dropdown
								label="직급"
								menuItems={positionOptions}
								defaultValue={career.position}
								onSelect={(val) => handleDropdownChange('position', val)}
							/>
						</div>
						<div className={styles.row}>
							<Input
								id={`startDate-${career.id}`}
								type="date"
								label="근무 시작일"
								value={career.startDate}
								onChange={(e) => handleCareerChange(index, 'startDate', e.target.value)}
							/>
							<Input
								id={`endDate-${career.id}`}
								type="date"
								label="근무 종료일"
								value={career.endDate}
								onChange={(e) => handleCareerChange(index, 'endDate', e.target.value)}
							/>
							<Input
								id={`notes-${career.id}`}
								label="비고"
								placeholder={career.notes}
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

import { useEffect, useState } from 'react';
import Input from '../common/Input/Input';
import styles from './CareerInfo.module.css';
import plus from '../../assets/btn_add.svg';
import { useGetCompanyCareers } from '../../apis/useCareer';
import { useParams } from 'react-router-dom';

export default function CareerInfo() {
	const { employeeId } = useParams();
	const { companyCareer, loading, error } = useGetCompanyCareers(employeeId);
	const [careerList, setCareerList] = useState([]);

	useEffect(() => {
		if (companyCareer) {
			setCareerList(companyCareer);
		}
	}, [companyCareer]);

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
								label="변경일"
								placeholder={career.changeDate ? career.changeDate.split('T')[0] : ''}
								style={style}
							/>
							<Input id={`changeType-${career.id}`} label="변경 구분" placeholder={career.changeType} style={style} />
						</div>
						<div className={styles.row}>
							<Input id={`workLocation-${career.id}`} label="근무지" placeholder={career.division} />
							<Input id={`department-${career.id}`} label="부서" placeholder={career.department} />
							<Input id={`position-${career.id}`} label="직급" placeholder={career.position} />
						</div>
						<div className={styles.row}>
							<Input id={`startDate-${career.id}`} label="근무 시작일" placeholder={career.startDate} />
							<Input id={`endDate-${career.id}`} label="근무 종료일" placeholder={career.endDate} />
							<Input id={`notes-${career.id}`} label="비고" placeholder={career.notes} />
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

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../common/Input/Input';
import styles from './Certification.module.css';
import plus from '../../assets/btn_add.svg';
import { useGetQualifications } from '../../apis/useQualification';

export default function CertificationInfo() {
	const { employeeId } = useParams();
	const { qualification, loading, error } = useGetQualifications(employeeId);
	const [certificationList, setCertificationList] = useState([]);

	useEffect(() => {
		if (qualification) {
			setCertificationList(qualification);
		}
	}, [qualification]);

	const handleAddCertification = () => {
		setCertificationList([
			...certificationList,
			{ id: Date.now(), licenseName: '', acquisitionDate: '', score: '', issuingAgency: '' },
		]);
	};

	const style = {
		width: '23rem',
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error fetching family info: {error.message}</p>;

	return (
		<div className={styles.infoContainer}>
			<h3>자격 인증 사항</h3>
			<form className={styles.infoForm}>
				{certificationList.map((certification, index) => (
					<div className={styles.row} key={certification.id}>
						<Input
							id={`licenseName-${certification.id}`}
							label="자격 면허명"
							placeholder={certification.licenseName}
							style={style}
						/>
						<Input
							id={`acquisitionDate-${certification.id}`}
							label="취득일자"
							placeholder={certification.acquisitionDate}
							style={style}
						/>
						<Input id={`score-${certification.id}`} label="성적" placeholder={certification.score} style={style} />
						<Input
							id={`issuingAgency-${certification.id}`}
							label="주관처"
							placeholder={certification.issuingAgency}
							style={style}
						/>
					</div>
				))}
				<div className={styles.row}>
					<img src={plus} alt="추가 버튼" onClick={handleAddCertification} />
				</div>
				<button type="submit">Save</button>
			</form>
		</div>
	);
}

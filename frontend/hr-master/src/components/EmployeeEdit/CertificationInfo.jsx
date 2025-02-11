import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../common/Input/Input';
import styles from './Certification.module.css';
import plus from '../../assets/btn_add.svg';
import { useAddQualification, useGetQualifications, useUpdateQualification } from '../../apis/useQualification';

export default function CertificationInfo() {
	const { employeeId } = useParams();
	const { qualification, loading, error } = useGetQualifications(employeeId);
	const { addQualification } = useAddQualification();
	const { updateQualification } = useUpdateQualification();
	const [certificationList, setCertificationList] = useState([]);

	useEffect(() => {
		if (qualification) {
			setCertificationList(qualification);
		}
	}, [qualification]);

	const handleCertificationChange = (index, field, value) => {
		setCertificationList((prevList) =>
			prevList.map((certification, i) => (i === index ? { ...certification, [field]: value } : certification))
		);
	};

	const handleAddCertification = () => {
		setCertificationList([
			...certificationList,
			{ qualificationId: null, licenseName: '', acquisitionDate: '', score: '', issuingAgency: '' },
		]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let newCertificationAdded = false;

		for (const certification of certificationList) {
			if (certification.qualificationId) {
				await updateQualification(employeeId, certification.qualificationId, {
					licenseName: certification.licenseName,
					acquisitionDate: certification.acquisitionDate,
					score: certification.score,
					issuingAgency: certification.issuingAgency,
				});
			} else {
				await addQualification(employeeId, {
					licenseName: certification.licenseName,
					acquisitionDate: certification.acquisitionDate,
					score: certification.score,
					issuingAgency: certification.issuingAgency,
				});
				newCertificationAdded = true;
			}
		}

		alert(newCertificationAdded ? '자격 이력 정보가 추가되었습니다.' : '자격 이력 정보가 수정되었습니다.');
	};

	const style = {
		width: '23rem',
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error fetching certification info: {error.message}</p>;

	return (
		<div className={styles.infoContainer}>
			<h3>자격 인증 사항</h3>
			<form className={styles.infoForm} onSubmit={handleSubmit}>
				{certificationList.map((certification, index) => (
					<div className={styles.row} key={certification.qualificationId || index}>
						<Input
							id={`licenseName-${index}`}
							label="자격 면허명"
							placeholder={certification.licenseName}
							style={style}
							onChange={(e) => handleCertificationChange(index, 'licenseName', e.target.value)}
						/>
						<Input
							id={`acquisitionDate-${index}`}
							type="date"
							label="취득일자"
							value={certification.acquisitionDate || ''}
							style={style}
							onChange={(e) => handleCertificationChange(index, 'acquisitionDate', e.target.value)}
						/>
						<Input
							id={`score-${index}`}
							label="성적"
							placeholder={certification.score}
							style={style}
							onChange={(e) => handleCertificationChange(index, 'score', e.target.value)}
						/>
						<Input
							id={`issuingAgency-${index}`}
							label="주관처"
							placeholder={certification.issuingAgency}
							style={style}
							onChange={(e) => handleCertificationChange(index, 'issuingAgency', e.target.value)}
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

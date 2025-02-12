import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../common/Input/Input';
import styles from './Certification.module.css';
import plus from '../../assets/btn_add.svg';
import x from '../../assets/btn_X.svg';
import {
	useAddQualification,
	useDeleteQualification,
	useGetQualifications,
	useUpdateQualification,
} from '../../apis/useQualification';

export default function CertificationInfo() {
	const { employeeId } = useParams();
	const { qualification, loading, error } = useGetQualifications(employeeId);
	const { addQualification } = useAddQualification();
	const { updateQualification } = useUpdateQualification();
	const { deleteQualification } = useDeleteQualification();
	const [certificationList, setCertificationList] = useState([]);
	const [deletedQualificationIds, setDeletedQualificationIds] = useState([]);

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

	const handleRemoveQualification = (index) => {
		const certification = certificationList[index];

		if (certification.qualificationId) {
			setDeletedQualificationIds((prev) => [...prev, certification.qualificationId]);
		}

		setCertificationList((prev) => prev.filter((_, i) => i !== index));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		let newCertifications = [];
		let updatedCertifications = [];

		for (const certification of certificationList) {
			if (certification.qualificationId) {
				updatedCertifications.push(certification);
			} else {
				newCertifications.push(certification);
			}
		}

		try {
			for (const certification of updatedCertifications) {
				await updateQualification(employeeId, certification.qualificationId, {
					licenseName: certification.licenseName || null,
					acquisitionDate: certification.acquisitionDate || null,
					score: certification.score || null,
					issuingAgency: certification.issuingAgency || null,
				});
			}

			let addedQualifications = [];
			for (const certification of newCertifications) {
				const addedCertification = await addQualification(employeeId, {
					licenseName: certification.licenseName || null,
					acquisitionDate: certification.acquisitionDate || null,
					score: certification.score || null,
					issuingAgency: certification.issuingAgency || null,
				});

				addedQualifications.push({ ...certification, qualificationId: addedCertification.qualificationId });
			}

			for (const qualificationId of deletedQualificationIds) {
				await deleteQualification(employeeId, qualificationId);
			}

			setCertificationList([...updatedCertifications, ...addedQualifications]);
			setDeletedQualificationIds([]);

			alert('자격 사항이 저장되었습니다.');
		} catch (error) {
			alert('자격 사항 저장 중 오류가 발생했습니다.');
			console.error(error);
		}
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
					<div className={`${styles.row} ${styles.qualificationRow}`} key={certification.qualificationId || index}>
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
						<img
							src={x}
							alt="삭제 버튼"
							className={styles.deleteButton}
							onClick={() => handleRemoveQualification(index)}
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

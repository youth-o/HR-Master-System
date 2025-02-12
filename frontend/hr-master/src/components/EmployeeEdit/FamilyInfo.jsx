import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Input from '../common/Input/Input';
import {
	useDeleteFamilyInfo,
	useGetFamilyInfo,
	usePostFamilyInfo,
	useUpdateFamilyInfo,
} from '../../apis/useFamilyInfo';
import styles from './FamilyInfo.module.css';
import plus from '../../assets/btn_add.svg';
import x from '../../assets/btn_X.svg';

export default function FamilyInfo() {
	const { employeeId } = useParams();
	const { familyInfo, loading, error } = useGetFamilyInfo(employeeId);
	const { postFamilyInfo } = usePostFamilyInfo();
	const { updateFamilyInfo } = useUpdateFamilyInfo();
	const { deleteFamilyInfo } = useDeleteFamilyInfo();
	const [familyMembers, setFamilyMembers] = useState([]);
	const [deletedFamilyIds, setDeletedFamilyIds] = useState([]);

	useEffect(() => {
		setFamilyMembers(familyInfo ? familyInfo.map((member) => ({ ...member })) : []);
	}, [familyInfo]);

	const handleChange = (index, field, value) => {
		setFamilyMembers((prevList) =>
			prevList.map(
				(member, i) => (i === index ? { ...member, [field]: value || '' } : member) // undefined 방지
			)
		);
	};

	const handleAddFamilyMember = () => {
		setFamilyMembers([
			...familyMembers,
			{ familyId: null, familyName: '', birthDate: '', contact: '', relationship: '' },
		]);
	};

	const handleRemoveFamilyMember = (index) => {
		const member = familyMembers[index];

		if (member.familyId) {
			setDeletedFamilyIds((prev) => [...prev, member.familyId]);
		}

		setFamilyMembers((prev) => prev.filter((_, i) => i !== index));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let newFamilyAdded = false;
		let updatedFamily = false;
		let deletedFamily = false;

		for (const member of familyMembers) {
			if (member.familyId) {
				await updateFamilyInfo(employeeId, member.familyId, {
					familyName: member.familyName || '',
					birthDate: member.birthDate || '',
					contact: member.contact || '',
					relationship: member.relationship || '',
				});
				updatedFamily = true;
			} else {
				await postFamilyInfo(employeeId, {
					familyName: member.familyName || '',
					birthDate: member.birthDate || '',
					contact: member.contact || '',
					relationship: member.relationship || '',
				});
				newFamilyAdded = true;
			}
		}

		for (const familyId of deletedFamilyIds) {
			await deleteFamilyInfo(employeeId, familyId);
			deletedFamily = true;
		}

		setDeletedFamilyIds([]);

		if (newFamilyAdded || updatedFamily || deletedFamily) {
			alert('가족 정보가 저장되었습니다.');
		} else {
			alert('변경된 내용이 없습니다.');
		}
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error fetching family info: {error.message}</p>;

	const style = { width: '23rem' };

	return (
		<div className={styles.infoContainer}>
			<h3>가족 정보</h3>
			<form className={styles.infoForm} onSubmit={handleSubmit}>
				{familyMembers.map((member, index) => (
					<div className={`${styles.row} ${styles.familyRow}`} key={member.familyId || index}>
						<Input
							id={`familyName-${index}`}
							label="이름"
							value={member.familyName || ''}
							style={style}
							onChange={(e) => handleChange(index, 'familyName', e.target.value)}
						/>
						<Input
							id={`birthDate-${index}`}
							type="date"
							label="생년월일"
							value={member.birthDate || ''}
							style={style}
							onChange={(e) => handleChange(index, 'birthDate', e.target.value)}
						/>
						<Input
							id={`contact-${index}`}
							label="연락처"
							value={member.contact || ''}
							style={style}
							onChange={(e) => handleChange(index, 'contact', e.target.value)}
						/>
						<Input
							id={`relationship-${index}`}
							label="관계"
							value={member.relationship || ''}
							style={style}
							onChange={(e) => handleChange(index, 'relationship', e.target.value)}
						/>
						<img
							src={x}
							alt="삭제 버튼"
							className={styles.deleteButton}
							onClick={() => handleRemoveFamilyMember(index)}
						/>
					</div>
				))}
				<div className={styles.row}>
					<img src={plus} alt="추가 버튼" onClick={handleAddFamilyMember} />
				</div>
				<button type="submit">Save</button>
			</form>
		</div>
	);
}

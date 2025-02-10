import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Input from '../common/Input/Input';
import styles from './FamilyInfo.module.css';
import plus from '../../assets/btn_add.svg';
import { useGetFamilyInfo, usePostFamilyInfo, useUpdateFamilyInfo } from '../../apis/useFamilyInfo';

export default function FamilyInfo() {
	const { employeeId } = useParams();
	const { familyInfo, loading, error } = useGetFamilyInfo(employeeId);
	const { updateFamilyInfo } = useUpdateFamilyInfo();
	const { postFamilyInfo } = usePostFamilyInfo();
	const [familyMembers, setFamilyMembers] = useState([]);

	useEffect(() => {
		if (familyInfo && familyInfo.length > 0) {
			setFamilyMembers(familyInfo);
		}
	}, [familyInfo]);

	const handleChange = (index, field, value) => {
		setFamilyMembers((prev) => prev.map((member, i) => (i === index ? { ...member, [field]: value } : member)));
	};

	const handleAddFamilyMember = () => {
		setFamilyMembers([
			...familyMembers,
			{ familyId: null, familyName: '', birthDate: '', contact: '', relationship: '' },
		]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let newFamilyAdded = false;

		for (const member of familyMembers) {
			if (member.familyId) {
				await updateFamilyInfo(employeeId, member.familyId, {
					familyName: member.familyName,
					birthDate: member.birthDate,
					contact: member.contact,
					relationship: member.relationship,
				});
			} else {
				await postFamilyInfo(employeeId, {
					familyName: member.familyName,
					birthDate: member.birthDate,
					contact: member.contact,
					relationship: member.relationship,
				});
				newFamilyAdded = true;
			}
		}

		if (newFamilyAdded) {
			alert('가족 정보가 추가되었습니다.');
		} else {
			alert('가족 정보가 수정되었습니다.');
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
					<div className={styles.row} key={member.familyId || index}>
						<Input
							id={`familyName-${index}`}
							label="이름"
							placeholder={member.familyName}
							style={style}
							onChange={(e) => handleChange(index, 'familyName', e.target.value)}
						/>
						<Input
							id={`birthDate-${index}`}
							type="date"
							label="생년월일"
							value={member.birthDate}
							style={style}
							onChange={(e) => handleChange(index, 'birthDate', e.target.value)}
						/>
						<Input
							id={`contact-${index}`}
							label="연락처"
							placeholder={member.contact}
							style={style}
							onChange={(e) => handleChange(index, 'contact', e.target.value)}
						/>
						<Input
							id={`relationship-${index}`}
							label="관계"
							placeholder={member.relationship}
							style={style}
							onChange={(e) => handleChange(index, 'relationship', e.target.value)}
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

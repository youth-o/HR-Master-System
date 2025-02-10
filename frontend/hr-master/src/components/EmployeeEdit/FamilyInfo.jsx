import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../common/Input/Input';
import styles from './FamilyInfo.module.css';
import plus from '../../assets/btn_add.svg';
import { useFamilyInfo } from '../../apis/useFamilyInfo';

export default function FamilyInfo() {
	const { employeeId } = useParams(); // ✅ URL에서 employeeId 가져오기
	const { familyInfo, loading, error } = useFamilyInfo(employeeId);

	const [familyMembers, setFamilyMembers] = useState([]);

	useEffect(() => {
		if (familyInfo) {
			setFamilyMembers(familyInfo);
		}
	}, [familyInfo]);

	const handleAddFamilyMember = () => {
		setFamilyMembers([...familyMembers, { id: Date.now(), name: '', birthDate: '', contact: '', relationship: '' }]);
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error fetching family info: {error.message}</p>;

	const style = {
		width: '23rem',
	};

	return (
		<div className={styles.infoContainer}>
			<h3>가족 정보</h3>
			<form className={styles.infoForm}>
				{familyMembers.map((member, index) => (
					<div className={styles.row} key={member.id}>
						<Input id={`familyName-${member.id}`} label="이름" placeholder={member.familyName} style={style} />
						<Input id={`birthDate-${member.id}`} label="생년월일" placeholder={member.birthDate} style={style} />
						<Input id={`contact-${member.id}`} label="연락처" placeholder={member.contact} style={style} />
						<Input id={`relationship-${member.id}`} label="관계" placeholder={member.relationship} style={style} />
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

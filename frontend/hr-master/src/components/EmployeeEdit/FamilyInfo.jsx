import { useState } from 'react';
import Input from '../common/Input/Input';
import styles from './FamilyInfo.module.css';
import plus from '../../assets/btn_add.svg';

export default function FamilyInfo() {
	const [familyMembers, setFamilyMembers] = useState([]);

	const style = {
		width: '23rem',
	};

	const handleAddFamilyMember = () => {
		setFamilyMembers([...familyMembers, { id: Date.now(), name: '', birthDate: '', contact: '', relationship: '' }]);
	};

	return (
		<div className={styles.infoContainer}>
			<h3>가족 정보</h3>
			<form className={styles.infoForm}>
				{familyMembers.map((member, index) => (
					<div className={styles.row} key={member.id}>
						<Input id={`familyName-${member.id}`} label="이름" style={style} />
						<Input id={`birthDate-${member.id}`} label="생년월일" style={style} />
						<Input id={`contact-${member.id}`} label="연락처" style={style} />
						<Input id={`relationship-${member.id}`} label="관계" style={style} />
					</div>
				))}
				<div className={styles.row}>
					<img src={plus} alt="추가 버튼" onClick={handleAddFamilyMember} style={{ cursor: 'pointer' }} />
				</div>
				<button type="submit">Save</button>
			</form>
		</div>
	);
}

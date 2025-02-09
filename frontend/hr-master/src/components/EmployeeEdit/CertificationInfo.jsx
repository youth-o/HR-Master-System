import { useState } from 'react';
import Input from '../common/Input/Input';
import styles from './Certification.module.css';
import plus from '../../assets/btn_add.svg';

export default function CertificationInfo() {
	const [certificationList, setCertificationList] = useState([]);

	const style = {
		width: '23rem',
	};

	const handleAddCertification = () => {
		setCertificationList([
			...certificationList,
			{ id: Date.now(), licenseName: '', acquisitionDate: '', score: '', issuingAgency: '' },
		]);
	};

	return (
		<div className={styles.infoContainer}>
			<h3>자격 인증 사항</h3>
			<form className={styles.infoForm}>
				{certificationList.map((member, index) => (
					<div className={styles.row} key={member.id}>
						<Input id={`licenseName-${member.id}`} label="자격 면허명" style={style} />
						<Input id={`acquisitionDate-${member.id}`} label="취득일자" style={style} />
						<Input id={`score-${member.id}`} label="성적" style={style} />
						<Input id={`issuingAgency-${member.id}`} label="주관처" style={style} />
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

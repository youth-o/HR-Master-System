import { useState } from 'react';
import styles from './EmployeeMenu.module.css';
import EmployeeInfo from './EmployeeInfo';
import EmployeeWorkInfo from './EmployeeWorkInfo';
import FamilyInfo from './FamilyInfo';
import CertificationInfo from './CertificationInfo';

export default function EmployeeMenu() {
	const [activeMenu, setActiveMenu] = useState('개인 정보');

	const handleMenuClick = (menu) => {
		setActiveMenu(menu);
	};

	const menuComponents = {
		'개인 정보': <EmployeeInfo />,
		'근무 정보': <EmployeeWorkInfo />,
		'가족 정보': <FamilyInfo />,
		'자격 인증 사항': <CertificationInfo />,
		// '경력': <CareerInfo />,
		// '교육 이력': <EducationInfo />,
	};

	return (
		<div className={styles.editContainer}>
			<div className={styles.menu}>
				{['개인 정보', '근무 정보', '가족 정보', '자격 인증 사항', '경력', '교육 이력'].map((menu) => (
					<p key={menu} className={activeMenu === menu ? styles.active : ''} onClick={() => handleMenuClick(menu)}>
						{menu}
					</p>
				))}
			</div>
			<div className={styles.contentContainer}>{menuComponents[activeMenu]}</div>
		</div>
	);
}

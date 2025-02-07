import { useState } from 'react';
import styles from './EmployeeMenu.module.css';

export default function EmployeeMenu() {
	const [activeMenu, setActiveMenu] = useState('개인 정보');

	const handleMenuClick = (menu) => {
		setActiveMenu(menu);
	};

	return (
		<div className={styles.menuContainer}>
			{['개인 정보', '근무 정보', '가족 정보', '자격 인증 사항', '경력', '교육 이력'].map((menu) => (
				<p key={menu} className={activeMenu === menu ? styles.active : ''} onClick={() => handleMenuClick(menu)}>
					{menu}
				</p>
			))}
		</div>
	);
}

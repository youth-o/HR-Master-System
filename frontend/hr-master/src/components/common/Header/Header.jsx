import styles from './Header.module.css';
import logo from '../../../assets/logo.svg';

export default function Header() {
	return (
		<header>
			<div className={styles.logoBox}>
				<img src={logo} alt="로고" />
				<p className={styles.logoText}>서한 인사관리 시스템</p>
			</div>
		</header>
	);
}

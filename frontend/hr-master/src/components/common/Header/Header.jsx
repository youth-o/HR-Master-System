import styles from './Header.module.css';
import logo from '../../../assets/logo.svg';
import Search from '../Search/Search';

export default function Header() {
	return (
		<header>
			<div className={styles.logoBox}>
				<img src={logo} alt="로고" />
				<p className={styles.logoText}>서한 인사관리 시스템</p>
			</div>
			<div className={styles.searchBox}>
				<Search />
				<button>로그아웃</button>
			</div>
		</header>
	);
}

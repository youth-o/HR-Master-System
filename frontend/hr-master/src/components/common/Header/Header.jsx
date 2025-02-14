import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../../assets/logo.svg';
import Search from '../Search/Search';
import { logout } from '../../../apis/useAuth';

export default function Header() {
	const navigate = useNavigate();

	const handleLogoClick = (path) => {
		if (path) {
			navigate(path);
		}
	};

	const handleLogout = async () => {
		const result = await logout();
		if (result.success) {
			navigate('/');
		} else {
			alert('로그아웃에 실패했습니다. 다시 시도해주세요.');
		}
	};

	return (
		<header>
			<div className={styles.logoBox} onClick={() => handleLogoClick('/main')}>
				<img src={logo} alt="로고" />
				<p className={styles.logoText}>서한 인사관리 시스템</p>
			</div>
			<div className={styles.searchBox}>
				<Search />
				<button onClick={handleLogout}>로그아웃</button>
			</div>
		</header>
	);
}

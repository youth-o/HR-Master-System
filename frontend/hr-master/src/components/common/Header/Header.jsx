import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../../assets/logo.svg';
import Search from '../Search/Search';
import { logout } from "../../../apis/Logout";

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
			localStorage.removeItem("token"); // JWT 사용 시 로컬 스토리지에서 토큰 삭제
			sessionStorage.clear(); // 세션 스토리지도 정리
			navigate("/"); // 로그인 페이지로 이동
		} else {
			alert("로그아웃 실패!");
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

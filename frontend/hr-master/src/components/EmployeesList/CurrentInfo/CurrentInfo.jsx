import Search from '../../common/Search/Search';
import styles from './CurrentInfo.module.css';
import profile from '../../../assets/Bg.svg';

export default function CurrentInfo({ setSearchTerm, onSearch }) {
	const style = {
		width: '20rem',
		backgroundColor: '#fff',
		padding: '1rem 1.6rem 1rem 4rem',
		borderRadius: '0.6rem',
		fontFamily: 'Pretendard',
		fontSize: '1.4rem',
		fontStyle: 'normal',
		fontWeight: 400,
		lineHeight: '140%',
		letterSpacing: '-0.014rem',
		border: '1px solid #ddd',
		outline: 'none',
	};

	const today = new Date();
	const formattedDate = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`;

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div className={styles.infoContainer}>
			<div className={styles.empId}>
				<h2>사원 번호: </h2>
				<Search
					placeholder="사원번호 검색"
					style={style}
					containerStyle={{ width: '20rem' }}
					onChange={handleSearchChange}
					onSearch={onSearch}
				/>
			</div>
			<div className={styles.info}>
				<div className={styles.profile}>
					<img src={profile} alt="프로필 이미지" />
					<div className={styles.profileText}>
						<h3>곽두팔</h3>
						<p>서한본부 IT기획팀 인턴</p>
					</div>
				</div>
				<p>{formattedDate}</p>
				<p>여긴 뭐지</p>
				<p>뭘 넣을까요..</p>
			</div>
		</div>
	);
}

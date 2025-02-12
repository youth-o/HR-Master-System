import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Nav.module.css';
import dashboard from '../../../assets/category.svg';
import message from '../../../assets/message-text.svg';
import calendar from '../../../assets/calendar.svg';
import register from '../../../assets/briefcase.svg';
import employee from '../../../assets/profile-2user.svg';
import attendance from '../../../assets/timer.svg';
import leave from '../../../assets/leave.svg';
import performance from '../../../assets/performance.svg';
import sound from '../../../assets/sound.svg';
import list from '../../../assets/document-text.svg';
import money from '../../../assets/money.svg';

export default function Nav() {
	const [activeCategory, setActiveCategory] = useState('dashboard');
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname.startsWith('/employees')) {
			setActiveCategory('employee');
		} else if (location.pathname.startsWith('/message')) {
			setActiveCategory('message');
		} else if (location.pathname.startsWith('/calendar')) {
			setActiveCategory('calendar');
		} else if (location.pathname.startsWith('/register')) {
			setActiveCategory('register');
		} else if (location.pathname.startsWith('/attendance')) {
			setActiveCategory('attendance');
		} else if (location.pathname.startsWith('/leave')) {
			setActiveCategory('leave');
		} else if (location.pathname.startsWith('/performance')) {
			setActiveCategory('performance');
		} else if (location.pathname.startsWith('/jobPosting')) {
			setActiveCategory('jobPosting');
		} else if (location.pathname.startsWith('/volunteer')) {
			setActiveCategory('volunteer');
		} else if (location.pathname.startsWith('/pay')) {
			setActiveCategory('pay');
		} else {
			setActiveCategory('dashboard');
		}
	}, [location.pathname]);

	const handleCategoryClick = (category, path) => {
		if (activeCategory !== category) {
			setActiveCategory(category);
		}
		if (path) {
			navigate(path);
		}
	};

	return (
		<aside className={styles.navContainer}>
			<div className={styles.mainBox}>
				<div
					className={`${styles.category} ${activeCategory === 'dashboard' ? styles.active : ''}`}
					onClick={() => handleCategoryClick('dashboard', '/main')}
				>
					<img src={dashboard} alt="대쉬보드 아이콘" />
					<p>대쉬보드</p>
				</div>
				<div
					className={`${styles.category} ${activeCategory === 'message' ? styles.active : ''}`}
					onClick={() => handleCategoryClick('message', '/message')}
				>
					<img src={message} alt="메세지 아이콘" />
					<p>메세지</p>
				</div>
				<div
					className={`${styles.category} ${activeCategory === 'calendar' ? styles.active : ''}`}
					onClick={() => handleCategoryClick('calendar')}
				>
					<img src={calendar} alt="달력 아이콘" />
					<p>캘린더</p>
				</div>
			</div>

			<p>직원 관리</p>
			<div className={styles.mainBox}>
				<div
					className={`${styles.category} ${activeCategory === 'register' ? styles.active : ''}`}
					onClick={() => handleCategoryClick('register', '/register')}
				>
					<img src={register} alt="사원등록 아이콘" />
					<p>사원 등록</p>
				</div>
				<div
					className={`${styles.category} ${activeCategory === 'employee' ? styles.active : ''}`}
					onClick={() => handleCategoryClick('employee', '/employees')}
				>
					<img src={employee} alt="사원수정 아이콘" />
					<p>사원 조회 및 수정</p>
				</div>
				<div
					className={`${styles.category} ${activeCategory === 'attendance' ? styles.active : ''}`}
					onClick={() => handleCategoryClick('attendance', '/attendance')}
				>
					<img src={attendance} alt="시계 아이콘" />
					<p>근태 조회</p>
				</div>
				<div
					className={`${styles.category} ${activeCategory === 'leave' ? styles.active : ''}`}
					onClick={() => handleCategoryClick('leave', '/leave')}
				>
					<img src={leave} alt="연차 아이콘" />
					<p>연차 조회</p>
				</div>
				<div
					className={`${styles.category} ${activeCategory === 'performance' ? styles.active : ''}`}
					onClick={() => handleCategoryClick('performance', '/performance')}
				>
					<img src={performance} alt="성과 아이콘" />
					<p>성과 조회</p>
				</div>
			</div>

			<p>채용 관리</p>
			<div className={styles.mainBox}>
				<div
					className={`${styles.category} ${activeCategory === 'jobPosting' ? styles.active : ''}`}
					onClick={() => handleCategoryClick('jobPosting', '/jobPosting')}
				>
					<img src={sound} alt="채용공고 아이콘" />
					<p>채용 공고</p>
				</div>
				<div
					className={`${styles.category} ${activeCategory === 'volunteer' ? styles.active : ''}`}
					onClick={() => handleCategoryClick('volunteer', '/volunteer')}
				>
					<img src={list} alt="채용관리 아이콘" />
					<p>지원자 관리</p>
				</div>
			</div>

			<p>급여 관리</p>
			<div
				className={`${styles.category} ${activeCategory === 'pay' ? styles.active : ''}`}
				onClick={() => handleCategoryClick('pay', '/pay')}
			>
				<img src={money} alt="급여 아이콘" />
				<p>급여 조회</p>
			</div>
		</aside>
	);
}

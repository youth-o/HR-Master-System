import React from 'react';
import './Register.css';
import Header from '../../components/common/Header/Header'; // ✅ Header 추가
import Nav from '../../components/common/Nav/Nav'; // ✅ Nav 추가
import RegisterForm from '../../components/Register/RegisterForm';

const Register = () => {
	return (
		<>
			{/* 🔹 상단 헤더 */}
			<Header />
			<div className="register-container">
				{/* 🔹 왼쪽 사이드바 (Nav) */}
				<Nav />
				<div className="register-content">
					{/* 🔹 오른쪽 컨텐츠 영역 */}
					<RegisterForm />
				</div>
			</div>
		</>
	);
};

export default Register;

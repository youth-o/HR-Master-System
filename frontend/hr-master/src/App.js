import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Login from './pages/login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Message from './pages/Message/Message';
import Register from './pages/Register/Register';
import EmployeesList from './pages/employeesList/EmployeesList';
import EmployeeEdit from './pages/employeeEdit/EmployeeEdit';
import PayManagement from './pages/PayManagement/PayManagement';
import Jobposting from './pages/RecruitmentManagement/Jobposting';
import Volunteer from './pages/RecruitmentManagement/Volunteer';
import AnnualManage from './pages/AnnualManage/AnnualManage';
import AttendanceManage from './pages/AttendanceManage/AttendanceManage';
import PerformanceManage from './pages/PerformanceManage/PerformanceManage';
import Calendar from './pages/Calendar/Calendar';
import { isAuthenticated } from './apis/useAuth';

// ✅ 로그인된 사용자만 접근 가능하도록 하는 PrivateRoute 컴포넌트
const PrivateRoute = ({ element }) => {
	const [isAuth, setIsAuth] = useState(null);

	useEffect(() => {
		const checkAuth = async () => {
			const authStatus = await isAuthenticated();
			setIsAuth(authStatus);
		};
		checkAuth();
	}, []);

	// 로그인 여부가 아직 확인되지 않았을 때는 로딩 화면
	if (isAuth === null) {
		return <div>로딩 중...</div>;
	}

	// 로그인되지 않았으면 로그인 페이지로 리다이렉트
	return isAuth ? element : <Navigate to="/" replace />;
};

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* 🔹 로그인 페이지 (기본 경로) */}
				<Route path="/" element={<Login />} />

				{/* 🔹 로그인된 사용자만 접근 가능한 페이지 */}
				<Route path="/main" element={<PrivateRoute element={<Dashboard />} />} />
				<Route path="/message" element={<PrivateRoute element={<Message />} />} />
				<Route path="/calendar" element={<PrivateRoute element={<Calendar />} />} />
				<Route path="/register" element={<PrivateRoute element={<Register />} />} />
				<Route path="/employees" element={<PrivateRoute element={<EmployeesList />} />} />
				<Route path="/employees/:employeeId" element={<PrivateRoute element={<EmployeeEdit />} />} />
				<Route path="/attendance" element={<PrivateRoute element={<AttendanceManage />} />} />
				<Route path="/leave" element={<PrivateRoute element={<AnnualManage />} />} />
				<Route path="/performance" element={<PrivateRoute element={<PerformanceManage />} />} />
				<Route path="/jobPosting" element={<PrivateRoute element={<Jobposting />} />} />
				<Route path="/volunteer" element={<PrivateRoute element={<Volunteer />} />} />
				<Route path="/pay" element={<PrivateRoute element={<PayManagement />} />} />

				{/* 🔹 존재하지 않는 경로 접근 시 로그인 페이지로 이동 */}
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

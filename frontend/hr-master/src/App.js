import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom';
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

// 로그인 여부 확인 함수
const isAuthenticated = () => {
	return !!localStorage.getItem('token'); // 로컬스토리지에서 로그인 상태 확인
};

// 로그인 체크 컴포넌트
const PrivateRoute = ({ element }) => {
	return isAuthenticated() ? element : <Navigate to="/" replace />;
};

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* 첫 화면을 로그인 페이지로 설정 */}
				<Route path="/" element={<Login />} />

				{/* 로그인된 사용자만 접근 가능 */}
				{/* 
        <Route path="/main" element={<PrivateRoute element={<Main />} />} /> */}
				<Route path="/main" element={<Dashboard />} />
				<Route path="/message" element={<Message />} />
				<Route path="/calendar" element={<Calendar />} />
				<Route path="/register" element={<Register />} />
				<Route path="/employees" element={<EmployeesList />} />
				<Route path="/employees/:employeeId" element={<EmployeeEdit />} />
				<Route path="/attendance" element={<AttendanceManage />} />
				<Route path="/leave" element={<AnnualManage />} />
				<Route path="/performance" element={<PerformanceManage />} />
				<Route path="/jobPosting" element={<Jobposting />} />
				<Route path="/volunteer" element={<Volunteer />} />
				<Route path="/pay" element={<PayManagement />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;

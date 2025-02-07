import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Main from './pages/main/Main';
import EmployeesList from './pages/employeesList/EmployeesList';
import EmployeeDetail from './pages/employeeDetail/EmployeeDetail';

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
				<Route path="/main" element={<Main />} />
				<Route path="/employees" element={<EmployeesList />} />
				<Route path="/employees/:employeeId" element={<EmployeeDetail />} />
				{/* <Route path="/employee">
					<Route index element={<PrivateRoute element={<Employee />} />} />
					<Route path=":id">
						<Route index element={<PrivateRoute element={<Attendance />} />} /> // 근태 관리
            <Route index element={<PrivateRoute element={<Leave />} />} /> // 연차 관리
            <Route index element={<PrivateRoute element={<Performance />} />} /> // 성과 관리
					</Route>
				</Route> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;

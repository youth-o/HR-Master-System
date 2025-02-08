import { useState, useEffect } from 'react';
import axios from 'axios';

// 전체 Employees 불러오는 API
export function useEmployees() {
	const [employees, setEmployees] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchEmployees = async () => {
			try {
				const response = await axios.get('/employees');
				setEmployees(response.data);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchEmployees();
	}, []);

	return { employees, loading, error };
}

// 사원 한 명을 불러오는 API
export function useEmployee(employeeId) {
	const [employee, setEmployee] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!employeeId) return;

		const fetchEmployee = async () => {
			try {
				const response = await axios.get(`/employees/${employeeId}`);
				setEmployee(response.data);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchEmployee();
	}, [employeeId]); // ✅ employeeId가 변경될 때마다 실행

	return { employee, loading, error };
}

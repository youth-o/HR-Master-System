import { useState, useEffect } from 'react';
import axios from 'axios';

// 전체 Employees 불러오는 API
export function useGetEmployees() {
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
export function useGetEmployee(employeeId) {
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
	}, [employeeId]);

	return { employee, loading, error };
}

// 사원 등록 API
export function useRegisterEmployee() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const registerEmployee = async (employeeData) => {
		setLoading(true);
		setError(null);

		try {
			const response = await axios.post('/employees/add', employeeData);
			return response.data;
		} catch (err) {
			setError(err);
			console.error('Error registering employee:', err);
		} finally {
			setLoading(false);
		}
	};

	return { registerEmployee, loading, error };
}

// 사원 정보 업데이트 API
export function useUpdateEmployee() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const updateEmployee = async (employeeId, updatedData) => {
		setLoading(true);
		setError(null);
		try {
			const response = await axios.patch(`/employees/${employeeId}`, updatedData);
			return response.data;
		} catch (err) {
			setError(err);
			console.error('Error updating employee:', err);
		} finally {
			setLoading(false);
		}
	};

	return { updateEmployee, loading, error };
}

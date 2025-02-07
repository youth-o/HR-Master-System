import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useEmployees() {
	const [employees, setEmployees] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// 전체 Employees 불러오는 API
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

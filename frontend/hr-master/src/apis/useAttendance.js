import { useState, useEffect } from 'react';
import axios from 'axios';

// 전체 사원 근태 조회 API
export function useGetAllAttendance() {
	const [attendance, setAttendance] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchAttendance = async () => {
			try {
				const response = await axios.get('/employees/attendances');
				setAttendance(response.data);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchAttendance();
	}, []);

	return { attendance, loading, error };
}

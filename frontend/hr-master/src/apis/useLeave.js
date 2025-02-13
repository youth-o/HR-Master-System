import { useState, useEffect } from 'react';
import axios from 'axios';

// 전체 사원 연차 조회 API
export function useGetAllLeaves() {
	const [leaves, setLeaves] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchLeaves = async () => {
			try {
				const response = await axios.get('/employees/leave_management');
				setLeaves(response.data);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchLeaves();
	}, []);

	return { leaves, loading, error };
}

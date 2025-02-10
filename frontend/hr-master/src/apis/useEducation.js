import { useState, useEffect } from 'react';
import axios from 'axios';

export function useGetEducations(employeeId) {
	const [education, setEducation] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!employeeId) return;

		const fetchEducation = async () => {
			try {
				const response = await axios.get(`/employees/${employeeId}/education`);
				setEducation(response.data);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchEducation();
	}, [employeeId]);

	return { education, loading, error };
}

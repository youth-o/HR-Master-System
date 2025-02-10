import { useState, useEffect } from 'react';
import axios from 'axios';

export function useGetQualifications(employeeId) {
	const [qualification, setQualification] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!employeeId) return;

		const fetchQualification = async () => {
			try {
				const response = await axios.get(`/employees/${employeeId}/qualifications`);
				setQualification(response.data);
			} catch (err) {
				if (err.response && err.response.status === 404) {
					setQualification([]);
				} else {
					setError(err);
				}
			} finally {
				setLoading(false);
			}
		};

		fetchQualification();
	}, [employeeId]);

	return { qualification, loading, error };
}

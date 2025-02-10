import axios from 'axios';
import { useEffect, useState } from 'react';

export function useGetCompanyCareers(employeeId) {
	const [companyCareer, setCompanyCareers] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!employeeId) return;

		const fetchCompanyCareers = async () => {
			try {
				const response = await axios.get(`/employees/${employeeId}/company_career`);
				setCompanyCareers(response.data);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchCompanyCareers();
	}, [employeeId]);

	return { companyCareer, loading, error };
}

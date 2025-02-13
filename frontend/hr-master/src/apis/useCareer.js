import axios from 'axios';
import { useEffect, useState } from 'react';

// 개별 사원의 사내 경력 조회
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

// 사내 경력 추가 API
export function useAddCompanyCareer() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const addCompanyCareer = async (employeeId, companyCareerData) => {
		setLoading(true);
		setError(null);

		try {
			const response = await axios.post(`/employees/${employeeId}/company_career/add`, companyCareerData);
			return response.data;
		} catch (err) {
			setError(err);
			console.log('Error adding company career:', err);
		} finally {
			setLoading(false);
		}
	};

	return { addCompanyCareer, loading, error };
}

// 사내 경력 수정 API
export function useUpdateCompanyCareer() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const updateCompanyCareer = async (employeeId, historyId, updatedData) => {
		setLoading(true);
		setError(null);
		try {
			const response = await axios.put(`/employees/${employeeId}/company_career/${historyId}`, updatedData);
			return response.data;
		} catch (err) {
			setError(err);
			console.error('Error updating company career:', err);
		} finally {
			setLoading(false);
		}
	};

	return { updateCompanyCareer, loading, error };
}

// 사내 경력 삭제 API
export function useDeleteCompanyCareer() {
	const deleteComapnyCareer = async (employeeId, historyId) => {
		try {
			await axios.delete(`/employees/${employeeId}/company_career/${historyId}/delete`);
		} catch (err) {
			console.error('Error deleting comapny career:', err);
		}
	};

	return { deleteComapnyCareer };
}

// 사외 경력 조회 API
export function useGetExternalCareers(employeeId) {
	const [externalCareer, setExternalCareers] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!employeeId) return;

		const fetchExternalCareers = async () => {
			try {
				const response = await axios.get(`/employees/${employeeId}/external_career`);
				setExternalCareers(response.data);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchExternalCareers();
	}, [employeeId]);

	return { externalCareer, loading, error };
}

// 개별 사원의 사외 경력 추가 API
export function useAddExternalCareers() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const addExternalCareer = async (employeeId, externalCareerData) => {
		setLoading(true);
		setError(null);

		try {
			const response = await axios.post(`/employees/${employeeId}/external_career/add`, externalCareerData);
			return response.data;
		} catch (err) {
			setError(err);
			console.error('Error adding external career:', err);
		} finally {
			setLoading(false);
		}
	};

	return { addExternalCareer, loading, error };
}

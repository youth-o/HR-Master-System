import { useState, useEffect } from 'react';
import axios from 'axios';

// 개별 사원 자격 이력 조회
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
					setQualification([]); // 🔹 데이터 없을 경우 빈 배열 반환
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

// 자격 이력 추가 API
export function useAddQualification() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const addQualification = async (employeeId, qualificationData) => {
		setLoading(true);
		setError(null);

		try {
			const response = await axios.post(`/employees/${employeeId}/qualifications/add`, qualificationData);
			return response.data;
		} catch (err) {
			setError(err);
			console.log('Error adding qualification:', err);
		} finally {
			setLoading(false);
		}
	};

	return { addQualification, loading, error };
}

// 자격 이력 수정 API
export function useUpdateQualification() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const updateQualification = async (employeeId, qualificationId, updatedData) => {
		setLoading(true);
		setError(null);
		try {
			const response = await axios.put(
				`/employees/${employeeId}/qualifications/${qualificationId}/update`,
				updatedData
			);
			return response.data;
		} catch (err) {
			setError(err);
			console.error('Error updating qualification:', err);
		} finally {
			setLoading(false);
		}
	};

	return { updateQualification, loading, error };
}

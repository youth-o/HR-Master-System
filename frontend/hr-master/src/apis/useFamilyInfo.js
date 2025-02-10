import { useState, useEffect } from 'react';
import axios from 'axios';

// 개별 사원의 가족 정보 불러오는 API
export function useGetFamilyInfo(employeeId) {
	const [familyInfo, setFamilyInfo] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!employeeId) return;

		const fetchFamily = async () => {
			try {
				const response = await axios.get(`/employees/${employeeId}/familyInfo`);
				setFamilyInfo(response.data);
			} catch (err) {
				// ✅ 404 에러 발생 시 빈 배열 반환 (가족 정보 없음)
				if (err.response && err.response.status === 404) {
					setFamilyInfo([]); // 빈 배열로 설정하여 기본 입력 필드 표시
				} else {
					setError(err);
				}
			} finally {
				setLoading(false);
			}
		};

		fetchFamily();
	}, [employeeId]);

	return { familyInfo, loading, error };
}

// 가족 정보 추가 API
export function usePostFamilyInfo() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const postFamilyInfo = async (employeeId, newFamilyData) => {
		setLoading(true);
		setError(null);
		try {
			const response = await axios.post(`/employees/${employeeId}/familyInfo/add`, newFamilyData);
			return response.data;
		} catch (err) {
			setError(err);
			console.error('Error adding family info:', err);
		} finally {
			setLoading(false);
		}
	};

	return { postFamilyInfo, loading, error };
}

// 가족 정보 업데이트 API
export function useUpdateFamilyInfo() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const updateFamilyInfo = async (employeeId, familyId, updatedData) => {
		setLoading(true);
		setError(null);
		try {
			const response = await axios.put(`/employees/${employeeId}/familyInfo/${familyId}`, updatedData);
			return response.data;
		} catch (err) {
			setError(err);
			console.error('Error updating family info:', err);
		} finally {
			setLoading(false);
		}
	};

	return { updateFamilyInfo, loading, error };
}

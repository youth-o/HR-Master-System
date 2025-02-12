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

// 교육 이력 추가 API
export function useAddEducation() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const addEducation = async (employeeId, educationData) => {
		setLoading(true);
		setError(null);

		try {
			const response = await axios.post(`/employees/${employeeId}/education/add`, educationData);
			return response.data;
		} catch (err) {
			setError(err);
			console.log('Error adding education:', err);
		} finally {
			setLoading(false);
		}
	};

	return { addEducation, loading, error };
}

// 교육 이력 수정 API
export function useUpdateEducation() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const updateEducation = async (employeeId, educationId, updatedData) => {
		setLoading(true);
		setError(null);
		try {
			const response = await axios.put(`/employees/${employeeId}/education/${educationId}`, updatedData);
			return response.data;
		} catch (err) {
			setError(err);
			console.error('Error updating Education:', err);
		} finally {
			setLoading(false);
		}
	};

	return { updateEducation, loading, error };
}

// 교육 이력 삭제 API
export function useDeleteEducation() {
	const deleteEducation = async (employeeId, educationId) => {
		try {
			await axios.delete(`/employees/${employeeId}/education/${educationId}/delete`);
		} catch (err) {
			console.error('Error deleting education:', err);
		}
	};

	return { deleteEducation };
}

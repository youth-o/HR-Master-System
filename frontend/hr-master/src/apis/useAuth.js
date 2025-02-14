export const login = async (employeeId, password) => {
	try {
		const response = await fetch(`/auth/login`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include', // ✅ 쿠키 포함하여 요청
			body: JSON.stringify({ employeeId, password }),
		});

		if (!response.ok) {
			throw new Error('이메일 또는 비밀번호가 틀립니다.');
		}

		const redirectUrl = await response.text();
		return { success: true, redirectUrl };
	} catch (error) {
		return { success: false, error: error.message || '서버 연결 오류' };
	}
};

export const logout = async () => {
	try {
		const response = await fetch(`/auth/logout`, {
			method: 'POST',
			credentials: 'include',
		});

		if (!response.ok) {
			throw new Error('로그아웃 실패');
		}

		return { success: true };
	} catch (error) {
		console.error('Logout Error:', error);
		return { success: false, error: error.message };
	}
};

export const isAuthenticated = async () => {
	try {
		const response = await fetch('/auth/check', {
			method: 'POST',
			credentials: 'include', // ✅ 쿠키 포함하여 요청
		});

		const isLoggedIn = await response.json();
		return isLoggedIn;
	} catch (error) {
		console.error('로그인 상태 확인 오류:', error);
		return false;
	}
};

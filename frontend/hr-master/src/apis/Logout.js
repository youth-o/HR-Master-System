const BASE_URL = "http://localhost:8080"; // 백엔드 주소

export const logout = async () => {
	try {
		const response = await fetch(`${BASE_URL}/auth/logout`, {
			method: "POST",
			credentials: "include", // 쿠키 포함 (세션 로그아웃 시 필요)
		});

		if (!response.ok) {
			throw new Error("로그아웃 실패");
		}

		return { success: true };
	} catch (error) {
		console.error("Logout Error:", error);
		return { success: false, error: error.message };
	}
};

const BASE_URL = "http://localhost:8080"; // 백엔드 주소

export const login = async (employeeId, password) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ employeeId, password }),
        });

        if (!response.ok) {
            throw new Error("이메일 또는 비밀번호가 틀립니다.");
        }

        const redirectUrl = await response.text(); // 백엔드에서 URL을 문자열로 반환
        return { success: true, redirectUrl };
    } catch (error) {
        return { success: false, error: error.message || "서버 연결 오류" };
    }
};

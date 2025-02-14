import { useState } from "react";
import { login } from "../../../apis/Login"; // API 호출 함수 임포트
import styles from "./LoginForm.module.css";

export default function LoginForm() {
    const [employeeId, setEmployeeId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); // 기본 폼 제출 동작 방지
		const numericEmployeeId = Number(employeeId);	//문자열 -> 숫자
		
		if (isNaN(numericEmployeeId)) {
            alert("Employee ID는 숫자만 입력해야 합니다.");
            return;
        }

        const result = await login(employeeId, password);

        if (result.success) {
            window.location.href = result.redirectUrl || "/main"; // 로그인 성공 시 페이지 이동
        } else {
            setError(result.error); // 로그인 실패 시 오류 메시지 표시
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.textBox}>
                <h2 className={styles.hello}>Hello Again!</h2>
                <p className={styles.welcome}>Welcome back.</p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <div className={styles.inputBox}>
                        <input
                            type="employeeId"
                            placeholder="Employee ID"
                            value={employeeId}
                            onChange={(e) => setEmployeeId(e.target.value)}	//employeeId = 문자열
                            required
                        />
                    </div>
                    <div className={styles.inputBox}>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>
                {error && <p className={styles.error}>{error}</p>}
                <button type="submit" className={styles.loginBtn}>
                    Login
                </button>
            </form>
        </div>
    );
}

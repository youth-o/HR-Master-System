import { useState } from 'react';
import { login } from '../../../apis/useAuth';
import styles from './LoginForm.module.css';

export default function LoginForm() {
	const [employeeId, setEmployeeId] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const numericEmployeeId = Number(employeeId);

		if (isNaN(numericEmployeeId)) {
			alert('Employee ID는 숫자만 입력해야 합니다.');
			return;
		}

		const result = await login(employeeId, password);

		if (result.success) {
			window.location.href = result.redirectUrl || '/main';
		} else {
			setError(result.error);
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
							onChange={(e) => setEmployeeId(e.target.value)} //employeeId = 문자열
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

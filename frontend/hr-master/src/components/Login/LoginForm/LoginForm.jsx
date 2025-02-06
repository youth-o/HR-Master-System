import styles from './LoginForm.module.css';

export default function LoginForm() {
	return (
		<div className={styles.container}>
			<div className={styles.textBox}>
				<h2 className={styles.hello}>Hello Again!</h2>
				<p className={styles.welcome}>Welcome back.</p>
			</div>
			<div className={styles.form}>
				<div className={styles.inputContainer}>
					<div className={styles.inputBox}>
						<input placeholder="Email Address" />
					</div>
					<div className={styles.inputBox}>
						<input type="password" placeholder="Password" />
					</div>
				</div>
				<button type="submit" className={styles.loginBtn}>
					Login
				</button>
			</div>
		</div>
	);
}

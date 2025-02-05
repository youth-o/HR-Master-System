import styles from './LoginForm.module.css';

export function LoginForm() {
	return (
		<div className={styles.container}>
			<div className={styles.textBox}>
				<h2>Hello Again!</h2>
				<p>Welcome back.</p>
			</div>
			<div className={styles.form}>
				<div className={styles.inputContainer}>
					<div className={styles.inputBox}>
						<input placeholder="Email Address" />
					</div>
					<div className={styles.inputBox}>
						<input placeholder="Password" />
					</div>
				</div>
			</div>
		</div>
	);
}

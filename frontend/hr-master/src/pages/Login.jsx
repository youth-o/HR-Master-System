import { LoginAside } from '../components/Login/LoginAside';
import { LoginForm } from '../components/Login/LoginForm';
import styles from './Login.module.css';

function Login() {
	return (
		<div className={styles.layout}>
			<div className={styles.aside}>
				<LoginAside />
			</div>
			<div className={styles.form}>
				<LoginForm />
			</div>
		</div>
	);
}

export default Login;

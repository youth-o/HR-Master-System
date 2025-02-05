import { LoginAside } from '../components/Login/LoginAside';
import { LoginForm } from '../components/Login/LoginForm';
import styles from './Login.module.css';

function Login() {
	return (
		<div className={styles.layout}>
			<LoginAside />
			<LoginForm />
		</div>
	);
}

export default Login;

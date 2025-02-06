import LoginAside from '../../components/Login/LoginAside/LoginAside.jsx';
import LoginForm from '../../components/Login/LoginForm/LoginForm.jsx';
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

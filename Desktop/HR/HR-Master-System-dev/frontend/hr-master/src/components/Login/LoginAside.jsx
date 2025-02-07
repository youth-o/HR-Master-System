import styles from './LoginAside.module.css';

export function LoginAside() {
	return (
		<div className={styles.leftContent}>
			<div className={styles.textBox}>
				<h2 className={styles.title}>서한그룹 인사 관리 시스템</h2>
				<p className={styles.titleEng}>Seohan HR Master</p>
			</div>
			<button className={styles.readBtn}>Read More</button>
		</div>
	);
}

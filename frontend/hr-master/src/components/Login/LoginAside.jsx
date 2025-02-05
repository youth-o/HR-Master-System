import styles from './LoginAside.module.css';

export function LoginAside() {
	return (
		<div className={styles.leftContent}>
			<div className={styles.textBox}>
				<div className={styles.title}>서한그룹 인사 관리 시스템</div>
				<div className={styles.titleEng}>Seohan HR Master</div>
			</div>
			<button className={styles.readBtn}>Read More</button>
		</div>
	);
}

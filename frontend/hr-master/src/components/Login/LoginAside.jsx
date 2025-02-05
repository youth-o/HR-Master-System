import styles from './LoginAside.module.css';

export function LoginAside() {
	return (
		<div className={styles.login}>
			<div className={styles.leftContent}>
				<div className={styles.bg}></div>
				<div className={styles.eclipse1}></div>
				<div className={styles.eclipse2}></div>
				<div className={styles.container}>
					<div className={styles.title}>서한그룹 인사 관리 시스템</div>
					<div className={styles.titleEng}>Seohan HR Master</div>
					<div className={styles.frame}>
						<div className={styles.readMore}>Read More</div>
					</div>
				</div>
			</div>
		</div>
	);
}

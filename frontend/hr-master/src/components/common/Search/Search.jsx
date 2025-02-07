import styles from './Search.module.css';
import search from '../../../assets/search-normal.svg';

export default function Search({ backgroundColor = '#e6e6e6', placeholder = 'Search' }) {
	return (
		<div className={styles.searchContainer}>
			<img src={search} alt="검색아이콘" className={styles.searchIcon} />
			<input placeholder={placeholder} type="text" style={{ backgroundColor }} />
		</div>
	);
}

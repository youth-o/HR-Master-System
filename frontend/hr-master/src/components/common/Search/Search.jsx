import styles from './Search.module.css';
import search from '../../../assets/search-normal.svg';

export default function Search({
	placeholder = 'Search',
	style = {},
	containerStyle = {},
	placeholderColor = ' #757575',
}) {
	return (
		<div className={styles.searchContainer} style={containerStyle}>
			<img src={search} alt="검색아이콘" className={styles.searchIcon} />
			<input placeholder={placeholder} type="text" style={style} placeholderColor={placeholderColor} />
		</div>
	);
}

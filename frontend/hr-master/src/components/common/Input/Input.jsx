import styles from './Input.module.css';
import search from '../../../assets/search-normal.svg';

export default function Input({ id = '', label = '', style = {}, searchTrue = false }) {
	return (
		<div className={styles.inputContainer} style={style}>
			<label for={id}>{label}</label>
			<input type="text" id={id} />
			{searchTrue && <img src={search} alt="검색 아이콘" />}
		</div>
	);
}

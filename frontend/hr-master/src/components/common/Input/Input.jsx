import styles from './Input.module.css';
import search from '../../../assets/search-normal.svg';

export default function Input({
	id = '',
	type = 'text',
	label = '',
	style = {},
	value = undefined,
	placeholder = '',
	searchTrue = false,
	readOnly = false,
	onSearch = () => {},
	onChange = () => {},
}) {
	return (
		<div className={styles.inputContainer} style={style}>
			<label htmlFor={id}>{label}</label>
			<input
				type={type}
				value={value ?? ''}
				id={id}
				placeholder={placeholder}
				readOnly={readOnly}
				onChange={onChange}
			/>
			{searchTrue && <img src={search} alt="검색 아이콘" onClick={onSearch} />}
		</div>
	);
}

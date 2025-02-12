import { useState, useEffect } from 'react';
import styles from './Dropdown.module.css';

export default function Dropdown({ label, menuItems = [], onSelect, defaultValue = '', style = {} }) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(defaultValue || '선택');

	useEffect(() => {
		if (defaultValue) {
			setSelectedItem(defaultValue);
		}
	}, [defaultValue]);

	const handleSelect = (item) => {
		setSelectedItem(item);
		setIsOpen(false);
		if (onSelect) {
			onSelect(item);
		}
	};

	return (
		<div className={styles.dropdownContainer} style={style}>
			<label className={styles.label}>{label}</label>
			<div className={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
				<span>{selectedItem}</span>
				<div className={styles.arrow}>{isOpen ? '▲' : '▼'}</div>
			</div>

			{isOpen && (
				<ul className={styles.menu}>
					{menuItems.map((item, index) => (
						<li key={index} onClick={() => handleSelect(item)}>
							{item}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

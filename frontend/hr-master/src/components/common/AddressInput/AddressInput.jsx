import { useState, useRef } from 'react';
import DaumPostcode from 'react-daum-postcode';
import Modal from 'react-modal';
import styles from './AddressInput.module.css';
import useOutsideClick from '../../../hooks/useOutsideClick';

export default function AddressInput({ label, id, value, onChange }) {
	const [isOpen, setIsOpen] = useState(false);
	const modalRef = useRef(null);

	useOutsideClick({ ref: modalRef, onClick: () => setIsOpen(false) });

	const completeHandler = (data) => {
		onChange({ target: { id, value: data.address } });
		setIsOpen(false);
	};

	const customStyles = {
		overlay: {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
			zIndex: 9999,
		},
		content: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			width: '500px',
			height: '600px',
			padding: '0',
			overflow: 'hidden',
			borderRadius: '10px',
			backgroundColor: '#fff',
			zIndex: 10000,
		},
	};

	return (
		<div className={styles.inputContainer}>
			<label htmlFor={id} className={styles.label}>
				{label}
			</label>
			<div className={styles.inputWrapper}>
				<input
					type="text"
					id={id}
					value={value}
					placeholder="주소를 입력하세요"
					className={styles.input}
					onClick={() => setIsOpen(true)}
					readOnly
				/>
			</div>

			{/* 주소 검색 모달 */}
			<Modal isOpen={isOpen} style={customStyles} parentSelector={() => document.body}>
				<div ref={modalRef}>
					<DaumPostcode onComplete={completeHandler} />
				</div>
			</Modal>
		</div>
	);
}

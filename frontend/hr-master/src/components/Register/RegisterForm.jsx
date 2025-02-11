import { useState } from 'react';
import Input from '../common/Input/Input';
import Dropdown from '../common/Dropdown/Dropdown';
import {
	hireOptions,
	militaryOptions,
	workLocationOptions,
	departmentOptions,
	positionOptions,
} from '../../constants/options';
import './RegisterForm.css';

export default function RegisterForm() {
	const [formData, setFormData] = useState({
		hireType: '',
		military: '',
		workLocation: '',
		department: '',
		position: '',
	});

	const handleDropdownChange = (field, selected) => {
		setFormData((prev) => ({
			...prev,
			[field]: selected,
		}));
	};

	const style = {
		width: '50rem',
	};

	return (
		<div className="infoContainer">
			<form className="infoForm">
				<h3>개인정보</h3>
				<div className="row">
					<Input id="employeeId" label="사번(ID)" />
					<Input id="ssn" label="주민번호" />
					<Input id="phone" label="연락처" />
				</div>
				<div className="row">
					<Input id="empName" label="이름" />
					<Input id="empEngName" label="영문 이름" />
					<Input id="hireDate" type="date" label="입사일" />
				</div>
				<div className="row">
					<Input id="nationality" label="국적" />
					<Dropdown
						label="군필 여부"
						menuItems={militaryOptions}
						onSelect={(val) => handleDropdownChange('military', val)}
					/>
					<Input id="address" label="주소" />
				</div>

				{/* 근무 정보 */}
				<h3>근무정보</h3>
				<div className="row">
					<Dropdown
						label="입사 구분"
						menuItems={hireOptions}
						onSelect={(val) => handleDropdownChange('hireType', val)}
					/>
					<Dropdown
						label="근무지"
						menuItems={workLocationOptions}
						onSelect={(val) => handleDropdownChange('workLocation', val)}
					/>
					<Dropdown
						label="부서"
						menuItems={departmentOptions}
						onSelect={(val) => handleDropdownChange('department', val)}
					/>
				</div>
				<div className="row">
					<Dropdown
						label="직급"
						menuItems={positionOptions}
						onSelect={(val) => handleDropdownChange('position', val)}
					/>
					<Input id="companyWork" label="회사 근무 사항" />
					<Input id="evaluationFlag" label="고과 여부" />
				</div>
				<div className="row">
					<Input id="companyEmail" type="email" label="사내 메일" style={style} />
					<Input id="companyPhone" label="사내 전화" style={style} />
				</div>

				{/* 사외 경력 정보 */}
				{formData.hireType === '경력' && (
					<>
						<h3>사외 경력</h3>
						<div className="row">
							<Input id="companyName" label="회사명" />
							<Input id="jobTitle" label="직무" />
							<Input id="position" label="직급" />
						</div>
						<div className="row">
							<Input id="hireDate" label="입사일" />
							<Input id="resignationDate" label="퇴사일" />
							<Input id="annualSalary" label="연봉" />
						</div>
					</>
				)}

				<button type="submit">Add Staff</button>
			</form>
		</div>
	);
}

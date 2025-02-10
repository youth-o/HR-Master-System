import React from "react";
import "./Register.css";
import Header from "../../components/common/Header/Header"; // ✅ Header 추가
import Nav from "../../components/common/Nav/Nav"; // ✅ Nav 추가

const Register = () => {
  return (
    <div className="register-container">
      {/* 🔹 상단 헤더 */}
      <Header />

      <div className="content">
        {/* 🔹 왼쪽 사이드바 (Nav) */}
        <Nav />

        {/* 🔹 오른쪽 컨텐츠 영역 */}
        <div className="container">
          <div className="title">
            <h2 className="heading">사원 등록</h2>
          </div>

          <form>
            {/* 개인 정보 */}
            <h3>개인정보</h3>
            <div className="form-group">
              <div className="input-label">
                <label>사번(ID)</label>
                <input type="text" />
              </div>
              <div className="input-label">
                <label>주민번호</label>
                <input type="text" />
              </div>
              <div className="input-label">
                <label>연락처</label>
                <input type="text" />
              </div>
              <div className="input-label">
                <label>이름</label>
                <input type="text" />
              </div>
              <div className="input-label">
                <label>영문 이름</label>
                <input type="text" />
              </div>
              <div className="input-label">
                <label>사내 이메일</label>
                <input type="email" />
              </div>
              <div className="input-label">
                <label>사내 전화</label>
                <input type="text" />
              </div>
              <div className="input-label">
                <label>입사일</label>
                <input type="date" />
              </div>
              <div className="input-label">
                <label>국적</label>
                <input type="text" />
              </div>
              <div className="input-label">
                <label>군필 여부</label>
                <input type="text" />
              </div>
              <div className="input-label">
                <label>주소</label>
                <input type="text" />
              </div>
            </div>

            {/* 근무 정보 */}
            <h3>근무정보</h3>
            <div className="form-group">
              <div className="input-label">
                <label>입사 구분</label>
                <input type="text" />
              </div>
              <div className="input-label">
                <label>근무지</label>
                <input type="text" />
              </div>
              <div className="input-label">
                <label>부서</label>
                <input type="text" />
              </div>
              <div className="input-label">
                <label>직급</label>
                <input type="text" />
              </div>
              <div className="input-label">
                <label>회사 근무 사항</label>
                <input type="text" />
              </div>
              <div className="input-label">
                <label>고과 여부</label>
                <input type="text" />
              </div>
            </div>

            {/* 퇴사 정보 */}
            <h3>퇴사정보</h3>
            <div className="form-group">
              <div className="input-label">
                <label>퇴사 일자</label>
                <input type="date" />
              </div>
              <div className="input-label">
                <label>퇴직사유</label>
                <input type="text" />
              </div>
              <div className="input-label">
                <label>퇴직금 금액</label>
                <input type="text" />
              </div>
            </div>

            {/* 버튼 */}
            <div className="button-container">
              <button type="submit" className="add-staff-btn">
                Add Staff
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import Header from "../../components/common/Header/Header";
import Nav from "../../components/common/Nav/Nav";
import "./Calendar.css";

const Calendar = () => {
  const today = new Date();
  
  // 현재 연도와 월을 상태로 관리
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth()); // 0부터 시작

  // 현재 월이 오늘의 연도와 월과 같으면 today 표시
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;
  const currentDate = isCurrentMonth ? today.getDate() : null;

  // 월 변경 함수
  const changeMonth = (direction) => {
    setMonth((prevMonth) => {
      let newMonth = prevMonth + direction;
      let newYear = year;
      
      if (newMonth < 0) {
        newMonth = 11;
        newYear -= 1;
      } else if (newMonth > 11) {
        newMonth = 0;
        newYear += 1;
      }

      setYear(newYear);
      return newMonth;
    });
  };

  // 선택한 월의 첫 번째 날과 마지막 날짜 계산
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const emptyCells = Array(firstDayOfMonth).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="calendar-container">
      <Header />
      <div className="calendar-content">
        <Nav />
        <div className="calendar-section">
          <div className="calendar-header">
            <button className="month-btn" onClick={() => changeMonth(-1)}>{"<"}</button>
            <h2>{year}년 {String(month + 1).padStart(2, '0')}월</h2>
            <button className="month-btn" onClick={() => changeMonth(1)}>{">"}</button>
          </div>
          <div className="calendar-weekdays">
            {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
              <div key={day} className="day-header">{day}</div>
            ))}
          </div>
          <div className="calendar-grid">
            {emptyCells.map((_, index) => (
              <div key={`empty-${index}`} className="empty-cell"></div>
            ))}
            {days.map((day) => (
              <div key={day} className={`day ${day === currentDate ? "today" : ""}`}>
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

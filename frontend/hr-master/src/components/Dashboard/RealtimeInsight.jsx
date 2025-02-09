import React, { useState, useEffect } from "react";
import "./RealtimeInsight.css";
import settingIcon from "../../assets/Dashboardimgs/settingicon.svg"; // 아이콘 경로
import sunIcon from "../../assets/Dashboardimgs/sunicon.png"; // 태양 아이콘 경로

const RealtimeInsight = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 🕒 현재 시간 포맷 (12시간제 AM/PM)
  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", { hour12: true });
  };

  // 📅 현재 날짜 포맷 (2nd August 2023)
  const formatDate = (date) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    // 날짜에 "st", "nd", "rd", "th" 붙이기
    const day = date.getDate();
    const suffix =
      day === 1 || day === 21 || day === 31
        ? "st"
        : day === 2 || day === 22
        ? "nd"
        : day === 3 || day === 23
        ? "rd"
        : "th";

    return `${day}${suffix} ${formattedDate.split(" ").slice(1).join(" ")}`;
  };

  return (
    <div className="realtime-insight">
      <div className="time-display">
        <img src={sunIcon} alt="Sun Icon" className="icon" />
        <span className="time">{formatTime(currentTime)}</span>
      </div>
      <p className="insight-text">Realtime Insight</p>

      <div className="date-section">
        <p className="today">Today:</p>
        {/* 📅 실시간 날짜 업데이트 */}
        <p className="date">{formatDate(currentTime)}</p>
      </div>

      <button className="config-button">
        <img src={settingIcon} alt="Settings" className="config-icon" />
        Advanced Configuration
      </button>
    </div>
  );
};

export default RealtimeInsight;

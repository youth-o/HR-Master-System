import React, { useState, useEffect } from "react";
import "./RealtimeInsight.css";
import settingIcon from "../../assets/Dashboardimgs/settingicon.svg"; 
import sunIcon from "../../assets/Dashboardimgs/sunicon.png"; 

const RealtimeInsight = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", { hour12: true });
  };

  const formatDate = (date) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    const day = date.getDate();
    const suffix = day === 1 || day === 21 || day === 31 ? "st" : 
                   day === 2 || day === 22 ? "nd" : 
                   day === 3 || day === 23 ? "rd" : "th";

    return `${day}${suffix} ${formattedDate.split(" ").slice(1).join(" ")}`;
  };

  return (
    <div className="realtime-insight">
      <div className="time-display">
        <img src={sunIcon} alt="Sun Icon" className="icon" />
        <span className="time">{formatTime(currentTime)}</span>
      </div>
      <p className="insight-text">Realtime Insight</p>

      {/* ✅ "Today:" 텍스트 제거 후 날짜만 표시 */}
      <p className="date">{formatDate(currentTime)}</p>

      <button className="config-button">
        <img src={settingIcon} alt="Settings" className="config-icon" />
        Advanced Configuration
      </button>
    </div>
  );
};

export default RealtimeInsight;

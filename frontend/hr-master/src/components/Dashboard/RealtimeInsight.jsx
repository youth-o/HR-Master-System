import React, { useState, useEffect } from "react";
import "./RealtimeInsight.css";
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

  return (
    <div className="realtime-insight">
      <div className="time-display">
        <img src={sunIcon} alt="Sun Icon" className="icon" />
        <span className="time">{formatTime(currentTime)}</span>
      </div>
      <p className="insight-text">Realtime Insight</p>
    </div>
  );
};

export default RealtimeInsight;

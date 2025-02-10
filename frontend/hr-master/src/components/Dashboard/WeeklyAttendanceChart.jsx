import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import adjustSettingsIcon from "../../assets/Dashboardimgs/Adjustsettings.svg";
import "./WeeklyAttendanceChart.css";

const initialData = [
  { name: "Sales", value: 40 },
  { name: "IT", value: 60 },
  { name: "Marketing", value: 85 },
  { name: "Legal", value: 55 },
  { name: "API", value: 40 },
];

const WeeklyAttendanceChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="weekly-attendance-container">
      <div className="chart-header">
        <span className="chart-title">Weekly Attendance</span>
        <img src={adjustSettingsIcon} alt="Settings" className="settings-icon" />
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={initialData} margin={{ top: 20, right: 20, left: 10, bottom: 40 }}>
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 14, fontWeight: "bold", textAnchor: "end" }} // ✅ X축 라벨 회전
            tickMargin={10} 
            interval={0} 
            dy={10} // 
          />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Bar dataKey="value" radius={[5, 5, 0, 0]}>
            {initialData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={hoveredIndex === index ? "#3354F4" : "#C4C4C4"}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyAttendanceChart;

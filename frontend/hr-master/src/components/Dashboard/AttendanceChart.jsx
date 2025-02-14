import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import adjustIcon from "../../assets/Dashboardimgs/Adjustsettings.svg"; // 아이콘 추가
import "./AttendanceChart.css";

Chart.register(...registerables);

const AttendanceChart = () => {
  const data = {
    labels: ["01 Aug", "02 Aug", "03 Aug", "04 Aug", "07 Aug", "08 Aug", "09 Aug", "10 Aug", "11 Aug", "14 Aug", "15 Aug", "16 Aug"],
    datasets: [
      {
        label: "Attendance Rate",
        data: [65, 75, 60, 70, 91, 68, 77, 55, 85, 90, 60, 80],
        borderColor: "#0043ff",
        backgroundColor: "rgba(0, 67, 255, 0.1)",
        pointBackgroundColor: "#0043ff",
        pointBorderColor: "#fff",
        pointRadius: 5,
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { grid: { display: false } },
      y: { min: 0, max: 100, ticks: { callback: (val) => `${val}%` } },
    },
    plugins: {
      tooltip: { enabled: true },
      legend: { display: false },
    },
  };

  return (
        <div className="chart-container">
        <div className="chart-header">
            <h3>Attendance Comparison Chart</h3>
            <div className="chart-controls">
            <div className="chart-filters">
                <span className="active"></span>
                <span>Weekly</span>
                <span>Monthly</span>
            </div>
            <img src={adjustIcon} alt="Settings" className="settings-icon" />
            </div>
        </div>
        <div className="chart-wrapper">
            <Line data={data} options={options} />
        </div>
        </div>

  );
};

export default AttendanceChart;

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import './PayrollSummary.css';

const data = [
    { name: '기본급', value: 234.2 , color: '#6495ED' },
    { name: '성과금', value: 95.86, color: '#C385FD' },
    { name: '초과 근무 수당', value: 181.34, color: '#1E90FF' },
    { name: '기타 수당', value: 37.13, color: '#0A12F7' },
];

const totalSalary = data.reduce((acc, item) => acc + item.value, 0); // 총 급여 계산

const PayrollSummary = () => {
    return (
        <div className="payroll-summary">
            <div className="summary-header">
                <h3>Payroll Summary</h3>
                <select className="month-selector">
                    <option>2025.01</option>
                    <option>2025.02</option>
                    <option>2025.03</option>
                </select>
            </div>
            <div className="summary-content">
                <div className="chart-container">
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={90}
                                dataKey="value"
                                stroke="none"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                    {/* <div className="chart-label">54%</div> */}
                </div>
                <div className="pay-details">
                    {data.map((item) => (
                        <div key={item.name} className="pay-detail">
                            <span className="pay-category">{item.name}</span>
                            <span className="pay-amount">₩{item.value.toLocaleString()}</span>
                        </div>
                    ))}
                    <div className="total-salary">
                        <span className="pay-category">총 급여</span>
                        <span className="pay-amount total">₩{totalSalary.toLocaleString()}</span>
                    </div>
                    <span className="currency-unit">₩ 단위 : 만원</span>
                </div>
            </div>
        </div>
    );
};

export default PayrollSummary;

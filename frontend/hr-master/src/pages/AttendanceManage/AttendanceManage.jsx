import React from 'react';
import Header from '../../components/common/Header/Header';
import Nav from '../../components/common/Nav/Nav';
import EmployeeInfo from '../../components/\bPayManagement/EmployeePayInfo';
import AttendanceTable from '../../components/Table/AttendanceTable/AttendanceTable'

import './AttendanceManage.css';

const PayManagement = () => {
    return (
        <>
            <Header />
            <div className="layout">
                <Nav />
                <div className="content">
                    <EmployeeInfo />
                    <AttendanceTable/>
                </div>
                    
            </div>
        </>
    );
};

export default PayManagement;

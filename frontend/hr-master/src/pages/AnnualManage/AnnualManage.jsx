import React from 'react';
import Header from '../../components/common/Header/Header';
import Nav from '../../components/common/Nav/Nav';
import EmployeeInfo from '../../components/\bPayManagement/EmployeePayInfo';
import AnnualTable from '../../components/Table/AnnualTable/AnnualTable'

import './AnnualManage.css';

const PayManagement = () => {
    return (
        <>
            <Header />
            <div className="layout">
                <Nav />
                <div className="content">
                    <EmployeeInfo />
                    <AnnualTable/>
                </div>
                
            </div>
        </>
    );
};

export default PayManagement;

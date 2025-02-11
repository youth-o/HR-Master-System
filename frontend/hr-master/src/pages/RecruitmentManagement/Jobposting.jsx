import React from 'react';
import Header from '../../components/common/Header/Header';
import Nav from '../../components/common/Nav/Nav';
import './Jobposting.css';

// 🔥 아이콘 import
import LocationIcon from '../../assets/RecruitmentManagement/LocationIcon.svg';
import SchoolIcon from '../../assets/RecruitmentManagement/schoolIcon.svg';
import SendIcon from '../../assets/RecruitmentManagement/send.svg';
import ArrowDownIcon from '../../assets/RecruitmentManagement/arrow-down.svg';

// 🔥 직무 아이콘 import
import SrUXDesignerIcon from '../../assets/RecruitmentManagement/SrUXDesignerIcon.png';
import GrowthManagerIcon from '../../assets/RecruitmentManagement/GrowthManagerIcon.png';
import FinancialAnalystIcon from '../../assets/RecruitmentManagement/FinancialAnalystIcon.png';
import QualityAssuranceIcon from '../../assets/RecruitmentManagement/QualityAssuranceIcon.png';
import FrontEndDeveloperIcon from '../../assets/RecruitmentManagement/FrontEndDeveloperIcon.png';
import NetworkDevelopersIcon from '../../assets/RecruitmentManagement/NetworkDevelopersIcon.png';
import PersonnelDutiesIcon from '../../assets/RecruitmentManagement/personnelDutiesIcon.png';
import ProductManagerIcon from '../../assets/RecruitmentManagement/ProductManagerIcon.png';
import SecurityEngineerIcon from '../../assets/RecruitmentManagement/SecurityEngineerIcon.png';

export default function Jobposting() {
    const jobList = [
        { title: 'Sr. UX Designer', date: 'Posted 2 days ago', location: 'Bengaluru', experience: '3 years exp.', applications: 45, lastWeek: 25, icon: SrUXDesignerIcon },
        { title: 'Growth Manager', date: 'Posted 5 days ago', location: 'Remote', experience: '2+ years exp.', applications: 38, lastWeek: 10, icon: GrowthManagerIcon },
        { title: 'Financial Analyst', date: 'Posted 10 days ago', location: 'Mumbai', experience: '5+ years exp.', applications: 25, lastWeek: 25, icon: FinancialAnalystIcon },
        { title: 'Quality Assurance', date: 'Posted 2 days ago', location: 'Bengaluru', experience: '3 years exp.', applications: 45, lastWeek: 25, icon: QualityAssuranceIcon },
        { title: 'Front-end Developer', date: 'Posted 5 days ago', location: 'Remote', experience: '2+ years exp.', applications: 38, lastWeek: 10, icon: FrontEndDeveloperIcon },
        { title: 'Network Developers', date: 'Posted 10 days ago', location: 'Mumbai', experience: '5+ years exp.', applications: 25, lastWeek: 25, icon: NetworkDevelopersIcon },
        { title: 'Personnel Duties', date: 'Posted 2 days ago', location: 'Bengaluru', experience: '3 years exp.', applications: 45, lastWeek: 25, icon: PersonnelDutiesIcon },
        { title: 'Product Manager', date: 'Posted 5 days ago', location: 'Remote', experience: '2+ years exp.', applications: 38, lastWeek: 10, icon: ProductManagerIcon },
        { title: 'Security Engineer', date: 'Posted 10 days ago', location: 'Mumbai', experience: '5+ years exp.', applications: 25, lastWeek: 25, icon: SecurityEngineerIcon },
    ];

    return (
        <>
            <Header />
            <div className="container">
                <Nav />
                <div className="content">
                    <div className="header-row">
                        <h2>현재 채용 정보</h2>
                        <button className="sort-button">
                            Sort By: Latest
                            <img src={ArrowDownIcon} alt="Sort" className="sort-icon" />
                        </button>
                    </div>
                    <div className="job-grid">
                        {jobList.map((job, index) => (
                            <div key={index} className="job-card">
                                <div className="job-arrow">
                                    <div className="job-arrow-bg">
                                        <img src={SendIcon} alt="Go" className="arrow-icon" />
                                    </div>
                                </div>
                                <img src={job.icon} alt={job.title} className="job-icon" />
                                <div className="job-content">
                                    <h3>{job.title}</h3>
                                    <p className="date">{job.date}</p>
                                    <div className="job-info">
                                        <div className="job-detail">
                                            <img src={LocationIcon} alt="Location" className="icon" />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="job-detail">
                                            <img src={SchoolIcon} alt="Experience" className="icon" />
                                            <span>{job.experience}</span>
                                        </div>
                                    </div>
                                    <div className="stats">
                                        <p className="applications">
                                            {job.applications} <span className="label">applications</span>
                                        </p>
                                        <p className="last-week">{job.lastWeek} in last week</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

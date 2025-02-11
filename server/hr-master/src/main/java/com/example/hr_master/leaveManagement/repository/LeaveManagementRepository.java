package com.example.hr_master.leaveManagement.repository;

import com.example.hr_master.leaveManagement.entity.LeaveManagement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LeaveManagementRepository extends JpaRepository<LeaveManagement, Long> {
    // Employee 엔티티의 employeeId를 기준으로 조회
    List<LeaveManagement> findByEmployee_EmployeeId(Long employeeId);
}

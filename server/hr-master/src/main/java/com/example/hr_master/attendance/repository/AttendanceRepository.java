package com.example.hr_master.attendance.repository;

import com.example.hr_master.attendance.entity.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
    // Employee 엔티티의 employeeId 필드를 기준으로 조회
    List<Attendance> findByEmployee_EmployeeId(Long employeeId);
}

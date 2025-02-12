package com.example.hr_master.attendance.dto;

import com.example.hr_master.employee.dto.EmployeeDto;
import com.example.hr_master.attendance.entity.AttendanceStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AttendanceDto {
    private Long attendanceId;
    private EmployeeDto employee;  // Employee 의 간략 정보만 포함
    private LocalDate attendanceDate;
    private LocalDateTime clockIn;
    private LocalDateTime clockOut;
    private AttendanceStatus attendanceStatus;
}
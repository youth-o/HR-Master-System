package com.example.hr_master.leaveManagement.dto;

import com.example.hr_master.employee.dto.EmployeeDto;
import com.example.hr_master.enumList.LeaveType;
import com.example.hr_master.enumList.ApprovalStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LeaveManagementDto {
    private Long applicationId;
    private EmployeeDto employee;  // 필요한 정보만 포함
    private LocalDate applicationDate;
    private String period;
    private BigDecimal daysApplied;
    private LeaveType leaveType;
    private ApprovalStatus approvalStatus;
    private String notes;
}

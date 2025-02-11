package com.example.hr_master.leaveManagement.service;

import com.example.hr_master.employee.dto.EmployeeDto;
import com.example.hr_master.employee.entity.Employee;
import com.example.hr_master.leaveManagement.dto.LeaveManagementDto;
import com.example.hr_master.leaveManagement.entity.LeaveManagement;
import com.example.hr_master.leaveManagement.repository.LeaveManagementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LeaveManagementService {

    private final LeaveManagementRepository leaveManagementRepository;

    @Autowired
    public LeaveManagementService(LeaveManagementRepository leaveManagementRepository) {
        this.leaveManagementRepository = leaveManagementRepository;
    }

    // 전체 사원의 연차 이력 DTO 목록 조회
    public List<LeaveManagementDto> getAllLeaveManagementDtos() {
        List<LeaveManagement> records = leaveManagementRepository.findAll();
        return records.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    // 특정 employeeId의 연차 이력 DTO 목록 조회
    public List<LeaveManagementDto> getLeaveManagementDtosByEmployeeId(Long employeeId) {
        List<LeaveManagement> records = leaveManagementRepository.findByEmployee_EmployeeId(employeeId);
        return records.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    // 엔티티를 DTO로 변환하는 private 메서드
    private LeaveManagementDto convertToDto(LeaveManagement leaveManagement) {
        Employee employee = leaveManagement.getEmployee();
        EmployeeDto employeeDto = EmployeeDto.builder()
                .employeeId(employee.getEmployeeId())
                .empName(employee.getEmpName())
                .build();

        return LeaveManagementDto.builder()
                .applicationId(leaveManagement.getApplicationId())
                .employee(employeeDto)
                .applicationDate(leaveManagement.getApplicationDate())
                .period(leaveManagement.getPeriod())
                .daysApplied(leaveManagement.getDaysApplied())
                .leaveType(leaveManagement.getLeaveType())
                .approvalStatus(leaveManagement.getApprovalStatus())
                .notes(leaveManagement.getNotes())
                .build();
    }
}

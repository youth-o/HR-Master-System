package com.example.hr_master.leaveManagement.controller;

import com.example.hr_master.leaveManagement.dto.LeaveManagementDto;
import com.example.hr_master.leaveManagement.service.LeaveManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class LeaveManagementController {

    private final LeaveManagementService leaveManagementService;

    @Autowired
    public LeaveManagementController(LeaveManagementService leaveManagementService) {
        this.leaveManagementService = leaveManagementService;
    }

    // 전체 사원의 연차 이력 DTO 목록 조회
    @GetMapping("/leave_management")
    public ResponseEntity<List<LeaveManagementDto>> getAllLeaveManagementRecords() {
        List<LeaveManagementDto> dtos = leaveManagementService.getAllLeaveManagementDtos();
        return ResponseEntity.ok(dtos);
    }

    // 특정 employeeId의 연차 이력 DTO 목록 조회
    @GetMapping("/{employeeId}/leave_management")
    public ResponseEntity<List<LeaveManagementDto>> getLeaveManagementRecordsByEmployeeId(@PathVariable Long employeeId) {
        List<LeaveManagementDto> dtos = leaveManagementService.getLeaveManagementDtosByEmployeeId(employeeId);
        return ResponseEntity.ok(dtos);
    }
}

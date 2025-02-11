package com.example.hr_master.attendance.controller;

import com.example.hr_master.attendance.dto.AttendanceDto;
import com.example.hr_master.attendance.service.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class AttendanceController {

    private final AttendanceService attendanceService;

    @Autowired
    public AttendanceController(AttendanceService attendanceService) {
        this.attendanceService = attendanceService;
    }

    // 전체 사원들의 근태 이력 DTO 목록 조회
    @GetMapping("/attendances")
    public ResponseEntity<List<AttendanceDto>> getAllAttendances() {
        List<AttendanceDto> dtos = attendanceService.getAllAttendanceDtos();
        return ResponseEntity.ok(dtos);
    }

    // 특정 employeeId의 근태 이력 DTO 목록 조회
    @GetMapping("/{employeeId}/attendances")
    public ResponseEntity<List<AttendanceDto>> getAttendancesByEmployeeId(@PathVariable Long employeeId) {
        List<AttendanceDto> dtos = attendanceService.getAttendanceDtosByEmployeeId(employeeId);
        return ResponseEntity.ok(dtos);
    }
}

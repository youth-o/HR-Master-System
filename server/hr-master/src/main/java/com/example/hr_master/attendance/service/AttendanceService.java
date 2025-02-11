package com.example.hr_master.attendance.service;

import com.example.hr_master.attendance.dto.AttendanceDto;
import com.example.hr_master.attendance.entity.Attendance;
import com.example.hr_master.attendance.repository.AttendanceRepository;
import com.example.hr_master.employee.dto.EmployeeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AttendanceService {

    private final AttendanceRepository attendanceRepository;

    @Autowired
    public AttendanceService(AttendanceRepository attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
    }

    // 전체 사원들의 Attendance 엔티티 목록을 DTO 목록으로 변환하여 반환
    public List<AttendanceDto> getAllAttendanceDtos() {
        return attendanceRepository.findAll()
                .stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    // 특정 employeeId의 Attendance 엔티티 목록을 DTO 목록으로 변환하여 반환
    public List<AttendanceDto> getAttendanceDtosByEmployeeId(Long employeeId) {
        return attendanceRepository.findByEmployee_EmployeeId(employeeId)
                .stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    // 엔티티를 DTO로 변환하는 private 메서드
    private AttendanceDto convertToDto(Attendance attendance) {
        return AttendanceDto.builder()
                .attendanceId(attendance.getAttendanceId())
                .attendanceDate(attendance.getAttendanceDate())
                .clockIn(attendance.getClockIn())
                .clockOut(attendance.getClockOut())
                .attendanceStatus(attendance.getAttendanceStatus())
                .employee(
                        EmployeeDto.builder()
                                .employeeId(attendance.getEmployee().getEmployeeId())
                                .empName(attendance.getEmployee().getEmpName())
                                .build()
                )
                .build();
    }
}
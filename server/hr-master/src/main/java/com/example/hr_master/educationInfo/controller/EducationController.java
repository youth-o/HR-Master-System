package com.example.hr_master.educationInfo.controller;

import com.example.hr_master.educationInfo.entity.Education;
import com.example.hr_master.educationInfo.service.EducationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class EducationController {
    private final EducationService educationService;

    public EducationController(EducationService educationService) {
        this.educationService = educationService;
    }

    // 전체 employee_id의 교육 정보 조회
    @GetMapping("/education")
    public ResponseEntity<List<Education>> getAllEducation() {
        return ResponseEntity.ok(educationService.getAllEducationInfo());
    }

    // 특정 employee_id의 교육 정보 조회
    @GetMapping("/{employeeId}/education")
    public ResponseEntity<List<Education>> getEducationByEmployeeId(@PathVariable Long employeeId) {
        return ResponseEntity.ok(educationService.getEducationByEmployeeId(employeeId));
    }

    // 특정 employee_id의 교육 정보 추가 (경로 변수명 일치하도록 수정)
    @PostMapping("/{employeeId}/education/add")
    public ResponseEntity<Education> addEducation(@PathVariable("employeeId") Long employeeId,
                                                  @RequestBody Education education) {
        return ResponseEntity.ok(educationService.addEducation(employeeId, education));
    }

    // 교육 정보 수정 (경로 변수명 일치하도록 수정)
    @PutMapping("/{employeeId}/education/{educationId}")
    public ResponseEntity<Education> updateEducation(@PathVariable("educationId") Long educationId,
                                                     @RequestBody Education education) {
        return ResponseEntity.ok(educationService.updateEducation(educationId, education));
    }

    // 교육 정보 삭제 (경로 변수명 일치하도록 수정)
    @DeleteMapping("/{employeeId}/education/{educationId}/delete")
    public ResponseEntity<Void> deleteEducation(@PathVariable("educationId") Long educationId) {
        educationService.deleteEducation(educationId);
        return ResponseEntity.noContent().build();
    }
}

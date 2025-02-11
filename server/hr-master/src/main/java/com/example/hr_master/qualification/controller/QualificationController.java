package com.example.hr_master.qualification.controller;

import com.example.hr_master.qualification.entity.Qualification;
import com.example.hr_master.qualification.service.QualificationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/employees")
public class QualificationController {
    private final QualificationService qualificationService;
    public QualificationController(QualificationService qualificationService) {
        this.qualificationService = qualificationService;
    }
    // 전체 employee_id의 자격 사항 조회
    @GetMapping("/qualifications")
    public ResponseEntity<List<Qualification>> getAllQualifications() {
        return ResponseEntity.ok(qualificationService.getAllQualifications());
    }
    // 특정 employee_id의 자격 사항 조회
    @GetMapping("/{employeeId}/qualifications")
    public ResponseEntity<List<Qualification>> getQualificationsByEmployeeId(@PathVariable Long employeeId) {
        return ResponseEntity.ok(qualificationService.getQualificationsByEmployeeId(employeeId));
    }
    // 특정 employee_id의 자격 사항 추가
    @PostMapping("/{employeeId}/qualifications/add")
    public ResponseEntity<Qualification> addQualification(@PathVariable Long employeeId,
                                                          @RequestBody Qualification qualification) {
        return ResponseEntity.ok(qualificationService.addQualification(employeeId, qualification));
    }
    // 특정 자격 사항 수정 (수정 기능 추가)
    @PutMapping("/{employeeId}/qualifications/{qualificationId}/update")
    public ResponseEntity<Qualification> updateQualification(@PathVariable Long qualificationId,
                                                             @RequestBody Qualification qualification) {
        return ResponseEntity.ok(qualificationService.updateQualification(qualificationId, qualification));
    }
    // 특정 자격 사항 삭제
    @DeleteMapping("/{employeeId}/qualifications/{qualificationId}/delete")
    public ResponseEntity<Void> deleteQualification(@PathVariable Long qualificationId) {
        qualificationService.deleteQualification(qualificationId);
        return ResponseEntity.noContent().build();
    }
}
package com.example.hr_master.externalCareer.controller;

import com.example.hr_master.externalCareer.entity.ExternalCareer;
import com.example.hr_master.externalCareer.service.ExternalCareerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class ExternalCareerController {

    private final ExternalCareerService externalCareerService;

    @Autowired
    public ExternalCareerController(ExternalCareerService externalCareerService) {
        this.externalCareerService = externalCareerService;
    }

    // 전체 사외 경력 조회
    @GetMapping("/external_career")
    public ResponseEntity<List<ExternalCareer>> getAllExternalCareers() {
        List<ExternalCareer> careers = externalCareerService.getAllExternalCareers();
        return ResponseEntity.ok(careers);
    }

    // 특정 employeeId의 사외 경력 조회
    @GetMapping("/{employeeId}/external_career")
    public ResponseEntity<List<ExternalCareer>> getExternalCareersByEmployeeId(@PathVariable Long employeeId) {
        List<ExternalCareer> careers = externalCareerService.getExternalCareersByEmployeeId(employeeId);
        return ResponseEntity.ok(careers);
    }

    // 특정 employeeId의 사외 경력 추가
    @PostMapping("/{employeeId}/external_career/add")
    public ResponseEntity<ExternalCareer> createExternalCareerForEmployee(@PathVariable Long employeeId,
                                                                          @RequestBody ExternalCareer externalCareer) {
        ExternalCareer createdCareer = externalCareerService.createExternalCareerForEmployee(employeeId, externalCareer);
        return ResponseEntity.ok(createdCareer);
    }

    // 특정 employeeId의 사외 경력 수정
    @PutMapping("/{employeeId}/external_career/{careerId}")
    public ResponseEntity<ExternalCareer> updateExternalCareer(@PathVariable Long careerId,
                                                               @RequestBody ExternalCareer externalCareer) {
        ExternalCareer updatedCareer = externalCareerService.updateExternalCareer(careerId, externalCareer);
        return ResponseEntity.ok(updatedCareer);
    }

    // 특정 employeeId의 사외 경력 삭제
    @DeleteMapping("/{employeeId}/external_career/{careerId}/delete")
    public ResponseEntity<Void> deleteExternalCareer(@PathVariable Long careerId) {
        externalCareerService.deleteExternalCareer(careerId);
        return ResponseEntity.noContent().build();
    }
}
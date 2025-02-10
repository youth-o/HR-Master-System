package com.example.hr_master.companyCareer.controller;

import com.example.hr_master.companyCareer.entity.CompanyCareer;
import com.example.hr_master.companyCareer.service.CompanyCareerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class CompanyCareerController {
    private final CompanyCareerService companyCareerService;

    public CompanyCareerController(CompanyCareerService companyCareerService) {
        this.companyCareerService = companyCareerService;
    }

    // 전체 사내 경력 조회
    @GetMapping("/company_career")
    public ResponseEntity<List<CompanyCareer>> getAllCompanyCareers() {
        return ResponseEntity.ok(companyCareerService.getAllCompanyCareers());
    }

    // 특정 employeeId의 사내 경력 조회
    @GetMapping("/{employeeId}/company_career")
    public ResponseEntity<List<CompanyCareer>> getCompanyCareersByEmployeeId(@PathVariable Long employeeId) {
        return ResponseEntity.ok(companyCareerService.getCompanyCareersByEmployeeId(employeeId));
    }

    // 특정 employeeId의 사내 경력 추가
    @PostMapping("/{employeeId}/company_career/add")
    public ResponseEntity<CompanyCareer> addCompanyCareer(@RequestBody CompanyCareer companyCareer) {
        return ResponseEntity.ok(companyCareerService.addCompanyCareer(companyCareer));
    }

    // 특정 employeeId의 사내 경력 수정
    @PutMapping("/{employeeId}/company_career/{historyId}")
    public ResponseEntity<CompanyCareer> updateCompanyCareer(@PathVariable Long historyId, @RequestBody CompanyCareer companyCareer) {
        return ResponseEntity.ok(companyCareerService.updateCompanyCareer(historyId, companyCareer));
    }

    // 특정 employeeId의 사내 경력 삭제
    @DeleteMapping("/{employeeId}/company_career/{historyId}/delete")
    public ResponseEntity<Void> deleteCompanyCareer(@PathVariable Long historyId) {
        companyCareerService.deleteCompanyCareer(historyId);
        return ResponseEntity.noContent().build();
    }
}
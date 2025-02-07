package com.example.hr_master.companyCareer.controller;

import com.example.hr_master.companyCareer.entity.CompanyCareer;
import com.example.hr_master.companyCareer.service.CompanyCareerService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/employees")
@RequiredArgsConstructor
public class CompanyCareerController {
    private final CompanyCareerService companyCareerService;

    // 특정 사원의 모든 사내 경력 조회 (GET /employees/{id}/company-career)
    @GetMapping("/{id}/company-career")
    public ResponseEntity<List<CompanyCareer>> getAllCompanyCareers(@PathVariable Long id) {
        List<CompanyCareer> companyCareers = companyCareerService.getAllCompanyCareers(id);
        return ResponseEntity.ok(companyCareers);
    }

    // 특정 사원의 특정 사내 경력 조회 (GET /employees/{id}/company-career/{careerId})
    @GetMapping("/{id}/company-career/{careerId}")
    public ResponseEntity<?> getCompanyCareer(
            @PathVariable Long id,
            @PathVariable Long careerId) {
        try {
            CompanyCareer companyCareer = companyCareerService.getCompanyCareer(id, careerId);
            return ResponseEntity.ok(companyCareer);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of(
                    "Success", false,
                    "message", e.getMessage()
            ));
        }
    }

    // 특정 사원의 사내 경력 추가 (POST /employees/{id}/company-career)
    @PostMapping("/{id}/company-career")
    public ResponseEntity<?> createCompanyCareer(
            @PathVariable Long id,
            @RequestBody CompanyCareer companyCareer) {
        companyCareerService.saveCompanyCareer(id, companyCareer);
        return ResponseEntity.ok().body(Map.of(
            "Success", true,
            "message", "Company career created successfully."
        ));
    }

    //특정 사원의 사내 경력 수정 (PUT /employees/{id}/company-career)
    @PutMapping("/{id}/company-career/{careerId}")
    public ResponseEntity<?> updateCompanyCareer(
            @PathVariable Long id,
            @PathVariable Long careerId,
            @RequestBody CompanyCareer updatedCompanyCareer) {
        try {
            CompanyCareer updatedCareer = companyCareerService.updateCompanyCareer(careerId, updatedCompanyCareer);
            return ResponseEntity.ok(updatedCareer);
        } catch (RuntimeException e){
            return ResponseEntity.badRequest().body(Map.of(
                "Success", false,
                "message",  e.getMessage()
            ));
        }
    }
}

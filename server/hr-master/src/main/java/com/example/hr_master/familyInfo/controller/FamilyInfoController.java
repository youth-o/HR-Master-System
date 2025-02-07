package com.example.hr_master.familyInfo.controller;

import com.example.hr_master.familyInfo.entity.FamilyInfo;
import com.example.hr_master.familyInfo.service.FamilyInfoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
@RequiredArgsConstructor
public class FamilyInfoController {
    private final FamilyInfoService familyInfoService;

    // 사원들 전체 가족정보 조회
    @GetMapping("/familyInfo")
    public List<FamilyInfo> getAllFamilyInfos() {
        return familyInfoService.getAllFamilyInfos();
    }

    // 특정 employee_id의 가족 정보 조회
    @GetMapping("/{employee_id}/familyInfo")
    public ResponseEntity<List<FamilyInfo>> getFamilyInfoByEmployeeId(@PathVariable("employee_id") Long employeeId) {
        List<FamilyInfo> familyInfos = familyInfoService.getFamilyInfoByEmployeeId(employeeId);
        if (familyInfos.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(familyInfos);
    }

    // 특정 employee_id의 가족 정보 추가
    @PostMapping("/{employeeId}/familyInfo/add")
    public ResponseEntity<FamilyInfo> addFamilyInfo(
            @PathVariable Long employeeId,
            @RequestBody FamilyInfo newFamilyInfo) {

        FamilyInfo savedFamilyInfo = familyInfoService.addFamilyInfo(employeeId, newFamilyInfo);
        return ResponseEntity.ok(savedFamilyInfo);
    }

    // 특정 employee_id의 가족 정보 수정
    @PutMapping("/{employeeId}/familyInfo/{familyId}")
    public ResponseEntity<FamilyInfo> updateFamilyInfo(
            @PathVariable Long employeeId,
            @PathVariable Long familyId,
            @RequestBody FamilyInfo updatedInfo) {

        FamilyInfo updatedFamilyInfo = familyInfoService.updateFamilyInfo(employeeId, familyId, updatedInfo);
        return ResponseEntity.ok(updatedFamilyInfo);
    }

    // 특정 employee_id의 가족 정보 삭제
    @DeleteMapping("/{employeeId}/familyInfo/{familyId}/delete")
    public ResponseEntity<Void> deleteFamilyInfo(@PathVariable Long employeeId, @PathVariable Long familyId) {
        familyInfoService.deleteFamilyInfo(employeeId, familyId);
        return ResponseEntity.noContent().build();
    }
}
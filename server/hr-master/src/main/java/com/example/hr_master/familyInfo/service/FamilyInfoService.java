package com.example.hr_master.familyInfo.service;

import com.example.hr_master.employee.entity.Employee;
import com.example.hr_master.employee.repository.EmployeeRepository;
import com.example.hr_master.familyInfo.entity.FamilyInfo;
import com.example.hr_master.familyInfo.repository.FamilyInfoRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FamilyInfoService {
    private final FamilyInfoRepository familyInfoRepository;
    private final EmployeeRepository employeeRepository;

    // 모든 가족정보 조회
    public List<FamilyInfo> getAllFamilyInfos() {
        return familyInfoRepository.findAll();
    }

    // 특정 employee_id의 가족 정보 조회
    public List<FamilyInfo> getFamilyInfoByEmployeeId(Long employeeId) {
        return familyInfoRepository.findByEmployeeEmployeeId(employeeId);
    }

    // 특정 employee_id의 가족정보 추가
    @Transactional
    public FamilyInfo addFamilyInfo(Long employeeId, FamilyInfo newFamilyInfo) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new EntityNotFoundException("해당 employeeId를 가진 직원이 없습니다."));

        newFamilyInfo.setEmployee(employee); // 가족 정보를 직원에 연결
        return familyInfoRepository.save(newFamilyInfo);
    }

    // 특정 employee_id의 가족정보 수정
    @Transactional
    public FamilyInfo updateFamilyInfo(Long employeeId, Long familyId, FamilyInfo updatedInfo) {
        // employeeId와 familyId가 일치하는 FamilyInfo 찾기
        FamilyInfo familyInfo = familyInfoRepository.findByFamilyIdAndEmployeeEmployeeId(familyId, employeeId)
                .orElseThrow(() -> new EntityNotFoundException("해당 employeeId와 familyId를 가진 데이터가 없습니다."));

        // 정보 업데이트
        familyInfo.setFamilyName(updatedInfo.getFamilyName());
        familyInfo.setBirthDate(updatedInfo.getBirthDate());
        familyInfo.setContact(updatedInfo.getContact());
        familyInfo.setRelationship(updatedInfo.getRelationship());

        return familyInfoRepository.save(familyInfo);
    }

    // 특정 employee_id의 가족정보 삭제
    @Transactional
    public void deleteFamilyInfo(Long employeeId, Long familyId) {
        // 해당 가족 정보가 존재하는지 확인
        familyInfoRepository.findByFamilyIdAndEmployee_EmployeeId(familyId, employeeId)
                .ifPresentOrElse(
                        familyInfoRepository::delete,
                        () -> { throw new EntityNotFoundException("해당 employeeId와 familyId를 가진 가족 정보가 없습니다."); }
                );
    }
}

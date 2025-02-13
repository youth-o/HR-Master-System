package com.example.hr_master.familyInfo.repository;

import com.example.hr_master.familyInfo.entity.FamilyInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FamilyInfoRepository extends JpaRepository<FamilyInfo, Long> {
    List<FamilyInfo> findByEmployeeEmployeeId(Long employeeId);
    Optional<FamilyInfo> findByFamilyIdAndEmployeeEmployeeId(Long familyId, Long employeeId);
    Optional<FamilyInfo> findByFamilyIdAndEmployee_EmployeeId(Long familyId, Long employeeId);
}

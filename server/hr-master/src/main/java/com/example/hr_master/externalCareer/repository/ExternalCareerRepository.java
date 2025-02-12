package com.example.hr_master.externalCareer.repository;

import com.example.hr_master.externalCareer.entity.ExternalCareer;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ExternalCareerRepository extends JpaRepository<ExternalCareer, Long> {
    // Employee 엔티티의 employeeId 필드를 기준으로 조회
    List<ExternalCareer> findByEmployee_EmployeeId(Long employeeId);
}

package com.example.hr_master.companyCareer.repository;

import com.example.hr_master.companyCareer.entity.CompanyCareer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyCareerRepository extends JpaRepository<CompanyCareer, Long> {
    List<CompanyCareer> findByEmployeeEmployeeId(Long employeeId);
}

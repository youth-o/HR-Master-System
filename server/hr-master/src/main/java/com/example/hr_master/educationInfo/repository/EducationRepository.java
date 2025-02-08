package com.example.hr_master.educationInfo.repository;

import com.example.hr_master.educationInfo.entity.Education;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EducationRepository extends JpaRepository<Education, Long> {
    List<Education> findByEmployee_EmployeeId(Long employeeId);
}

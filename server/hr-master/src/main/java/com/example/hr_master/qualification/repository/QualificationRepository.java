package com.example.hr_master.qualification.repository;

import com.example.hr_master.qualification.entity.Qualification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QualificationRepository extends JpaRepository<Qualification, Long> {
    List<Qualification> findByEmployee_EmployeeId(Long employeeId);
}


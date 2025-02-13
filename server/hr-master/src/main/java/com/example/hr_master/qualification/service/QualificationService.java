package com.example.hr_master.qualification.service;

import com.example.hr_master.qualification.entity.Qualification;
import com.example.hr_master.qualification.repository.QualificationRepository;
import com.example.hr_master.employee.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QualificationService {
    private final QualificationRepository qualificationRepository;
    private final EmployeeRepository employeeRepository;

    public QualificationService(QualificationRepository qualificationRepository,
                                EmployeeRepository employeeRepository) {
        this.qualificationRepository = qualificationRepository;
        this.employeeRepository = employeeRepository;
    }

    // 전체 employee_id의 자격 사항 조회
    public List<Qualification> getAllQualifications() {
        return qualificationRepository.findAll();
    }

    // 특정 employee_id의 자격 사항 조회
    public List<Qualification> getQualificationsByEmployeeId(Long employeeId) {
        return qualificationRepository.findByEmployee_EmployeeId(employeeId);
    }

    // 특정 employee_id의 자격 사항 추가
    public Qualification addQualification(Long employeeId, Qualification qualification) {
        return employeeRepository.findById(employeeId)
                .map(employee -> {
                    qualification.setEmployee(employee);
                    return qualificationRepository.save(qualification);
                })
                .orElseThrow(() -> new RuntimeException("Employee with ID " + employeeId + " not found."));
    }

    // 특정 자격 사항 수정 (수정 기능 추가)
    public Qualification updateQualification(Long qualificationId, Qualification updatedQualification) {
        return qualificationRepository.findById(qualificationId)
                .map(existingQualification -> {
                    existingQualification.setLicenseName(updatedQualification.getLicenseName());
                    existingQualification.setAcquisitionDate(updatedQualification.getAcquisitionDate());
                    existingQualification.setScore(updatedQualification.getScore());
                    existingQualification.setIssuingAgency(updatedQualification.getIssuingAgency());
                    return qualificationRepository.save(existingQualification);
                })
                .orElseThrow(() -> new RuntimeException("Qualification with ID " + qualificationId + " not found."));
    }

    // 특정 자격 사항 삭제
    public void deleteQualification(Long qualificationId) {
        qualificationRepository.deleteById(qualificationId);
    }
}
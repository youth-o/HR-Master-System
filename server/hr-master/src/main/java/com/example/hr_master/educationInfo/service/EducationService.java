package com.example.hr_master.educationInfo.service;

import com.example.hr_master.educationInfo.entity.Education;
import com.example.hr_master.educationInfo.repository.EducationRepository;
import com.example.hr_master.employee.entity.Employee;
import com.example.hr_master.employee.repository.EmployeeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class EducationService {
    private final EducationRepository educationRepository;
    private final EmployeeRepository employeeRepository;

    public EducationService(EducationRepository educationRepository, EmployeeRepository employeeRepository) {
        this.educationRepository = educationRepository;
        this.employeeRepository = employeeRepository;
    }

    // 전체 employee_id의 교육 정보 조회
    public List<Education> getAllEducationInfo() {
        return educationRepository.findAll();
    }

    // 특정 employee_id의 교육 정보 조회
    public List<Education> getEducationByEmployeeId(Long employeeId) {
        return educationRepository.findByEmployee_EmployeeId(employeeId);
    }

    // 특정 employee_id의 교육 정보 추가
    @Transactional
    public Education addEducation(Long employeeId, Education education) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new IllegalArgumentException("해당 ID의 직원이 존재하지 않습니다."));
        education.setEmployee(employee);
        return educationRepository.save(education);
    }

    // 교육 정보 수정
    @Transactional
    public Education updateEducation(Long educationId, Education newEducationData) {
        Education education = educationRepository.findById(educationId)
                .orElseThrow(() -> new IllegalArgumentException("해당 ID의 교육 정보가 존재하지 않습니다."));

        education.setEducationType(newEducationData.getEducationType());
        education.setStartDate(newEducationData.getStartDate());
        education.setEndDate(newEducationData.getEndDate());
        education.setCourseName(newEducationData.getCourseName());
        education.setOrganizer(newEducationData.getOrganizer());

        return educationRepository.save(education);
    }

    // 교육 정보 삭제
    @Transactional
    public void deleteEducation(Long educationId) {
        Education education = educationRepository.findById(educationId)
                .orElseThrow(() -> new IllegalArgumentException("해당 ID의 교육 정보가 존재하지 않습니다."));
        educationRepository.delete(education);
    }
}

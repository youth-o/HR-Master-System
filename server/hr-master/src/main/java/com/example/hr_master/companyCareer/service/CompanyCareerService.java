package com.example.hr_master.companyCareer.service;

import com.example.hr_master.companyCareer.entity.CompanyCareer;
import com.example.hr_master.companyCareer.repository.CompanyCareerRepository;
import com.example.hr_master.employee.entity.Employee;
import com.example.hr_master.employee.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyCareerService {
    private final CompanyCareerRepository companyCareerRepository;
    private final EmployeeRepository employeeRepository; // EmployeeRepository 추가

    public CompanyCareerService(CompanyCareerRepository companyCareerRepository, EmployeeRepository employeeRepository) {
        this.companyCareerRepository = companyCareerRepository;
        this.employeeRepository = employeeRepository;
    }

    // 전체 사내 경력 조회
    public List<CompanyCareer> getAllCompanyCareers() {
        return companyCareerRepository.findAll();
    }

    // 특정 employeeId의 사내 경력 조회
    public List<CompanyCareer> getCompanyCareersByEmployeeId(Long employeeId) {
        return companyCareerRepository.findByEmployeeEmployeeId(employeeId);
    }

    // 특정 employeeId의 사내 경력 추가
    public CompanyCareer addCompanyCareer(Long employeeId, CompanyCareer companyCareer) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new RuntimeException("Employee not found with id: " + employeeId));

        companyCareer.setEmployee(employee); // 🔹 employee 설정

        return companyCareerRepository.save(companyCareer);
    }

    // 특정 employeeId의 사내 경력 수정
    public CompanyCareer updateCompanyCareer(Long historyId, CompanyCareer updatedCareer) {
        Optional<CompanyCareer> existingCareerOpt = companyCareerRepository.findById(historyId);
        if (existingCareerOpt.isPresent()) {
            CompanyCareer existingCareer = existingCareerOpt.get();
            existingCareer.setChangeDate(updatedCareer.getChangeDate());
            existingCareer.setChangeType(updatedCareer.getChangeType());
            existingCareer.setDivision(updatedCareer.getDivision());
            existingCareer.setDepartment(updatedCareer.getDepartment());
            existingCareer.setPosition(updatedCareer.getPosition());
            existingCareer.setStartDate(updatedCareer.getStartDate());
            existingCareer.setEndDate(updatedCareer.getEndDate());
            existingCareer.setNotes(updatedCareer.getNotes());
            return companyCareerRepository.save(existingCareer);
        } else {
            throw new RuntimeException("Company Career not found with id: " + historyId);
        }
    }

    // 특정 employeeId의 사내 경력 삭제
    public void deleteCompanyCareer(Long historyId) {
        companyCareerRepository.deleteById(historyId);
    }
}
